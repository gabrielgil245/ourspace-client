import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  private _serverDomain: string = 'http://localhost:9000';
  private _s3Bucket: string = 'project2.rev';
  private _awsRegion: string = 'us-east-2';
  private _s3ProfileFolder: string = 'profilepics';
  private _s3PostFolder: string = 'postpics';

  constructor() { }

  getServerDomain() {
    return this._serverDomain;
  }

  getS3Bucket() {
    return this._s3Bucket;
  }

  getAWSRegion() {
    return this._awsRegion;
  }

  getS3ProfileFolder() {
    return this._s3ProfileFolder;
  }

  getS3PostFolder() {
    return this._s3PostFolder;
  }
}
