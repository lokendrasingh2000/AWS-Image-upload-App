import logging
import subprocess

import boto3

client = boto3.client('stepfunctions')


response = client.start_execution(
        stateMachineArn='arn:aws:states:us-east-2:123032053400:stateMachine:ImageProcessingApp',
        name='ImageProcessingApp',
        input= ''
    )

