import { Component, OnInit } from '@angular/core';
import { S3 } from 'aws-sdk';

import { UploadService } from './../services/upload.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedFiles: FileList;
  constructor() { }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    }

  upload() {
    console.log('Successfully called the uploaded function.');
    const file = this.selectedFiles.item(0);
    this.uploadFile(file);
  }
  
  uploadFile(file) {
    const contentType = file.type;
    const bucket = new S3(
          {
              accessKeyId: 'AKIARZJKIE2MCGTCJU5N',
              secretAccessKey: '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',
              region: 'us-east-2'
          }
      );
      
      const params = {
          Bucket: 'imageprocessingapp',
          Key:  file.name,
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };
      bucket.upload(params, function (err, data) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          console.log('Successfully uploaded file.', data);
          return true;
      });
      
      const params1 = {
        Bucket: 'imageprocessingapp-1',
        Key:  file.name,
        Body: file,
        ACL: 'public-read',
        ContentType: contentType
    };
    bucket.upload(params1, function (err, data) {
      if (err) {
          console.log('There was an error uploading your file: ', err);
          return false;
      }
      console.log('Successfully uploaded file to 2nd bucket too.', data);
      return true;
  });

  const params2 = {
    Bucket: 'imageprocessingapp-3',
    Key:  file.name,
    Body: file,
    ACL: 'public-read',
    ContentType: contentType
};
bucket.upload(params2, function (err, data) {
  if (err) {
      console.log('There was an error uploading your file: ', err);
      return false;
  }
  console.log('Successfully uploaded file to 3nd bucket too.', data);
  return true;
});
alert('File has been uploaded successfully !');

//for upload progress   
/*bucket.upload(params).on('httpUploadProgress', function (evt) {
          console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
      }).send(function (err, data) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          console.log('Successfully uploaded file.', data);
          return true;
      });*/
}

  ngOnInit(): void {
  }

}
