import { Component } from '@angular/core';
import { S3ConnectService } from './services/s3-connect.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 's3-Client';
  bucketName!: string;

  constructor(private s3ConnectService: S3ConnectService) { }
  
  createBucket(): void {
    this.s3ConnectService.createBucket(this.bucketName).subscribe(
      response => {
        console.log("Bucket {bucketName} created succesfully.");
      },
      error => {
        console.error("Failed to create bucket");
      }
    )
  }

}
