import logging
import subprocess

import boto3

SIGNED_URL_EXPIRATION = 300     # The number of seconds that the Signed URL is valid
DYNAMODB_TABLE_NAME = "TechnicalMetadata"
DYNAMO = boto3.resource("dynamodb")
TABLE = DYNAMO.Table(DYNAMODB_TABLE_NAME)

logger = logging.getLogger('boto3')
logger.setLevel(logging.INFO)


def lambda_handler(event, context):
    """

    :param event:
    :param context:
    """
    # Loop through records provided by S3 Event trigger
    for s3_record in event['Records']:
        logger.info("Working on new s3_record...")
        # Extract the Key and Bucket names for the asset uploaded to S3
        key = s3_record['s3']['object']['key']
        bucket = s3_record['s3']['bucket']['name']
        logger.info("Bucket: {} \t Key: {}".format(bucket, key))
        # Generate a signed URL for the uploaded asset
        signed_url = get_signed_url(SIGNED_URL_EXPIRATION, bucket, key)
        logger.info("Signed URL: {}".format(signed_url))
        # Launch MediaInfo
        # Pass the signed URL of the uploaded asset to MediaInfo as an input
        # MediaInfo will extract the technical metadata from the asset
        # The extracted metadata will be outputted in XML format and
        # stored in the variable xml_output
        xml_output = subprocess.check_output(["./mediainfo", "--full", "--output=XML", signed_url])
        logger.info("Output: {}".format(xml_output))
        save_record(key, xml_output)

def save_record(key, xml_output):
    """
    Save record to DynamoDB

    :param key:         S3 Key Name
    :param xml_output:  Technical Metadata in XML Format
    :return:
    """
    logger.info("Saving record to DynamoDB...")
    TABLE.put_item(
       Item={
            'keyName': key,
            'technicalMetadata': xml_output
        }
    )
    logger.info("Saved record to DynamoDB")


def get_signed_url(expires_in, bucket, obj):
    """
    Generate a signed URL
    :param expires_in:  URL Expiration time in seconds
    :param bucket:
    :param obj:         S3 Key name
    :return:            Signed URL
    """
    s3_cli = boto3.client("s3")
    presigned_url = s3_cli.generate_presigned_url('get_object', Params={'Bucket': bucket, 'Key': obj},
                                                  ExpiresIn=expires_in)
    return presigned_url
