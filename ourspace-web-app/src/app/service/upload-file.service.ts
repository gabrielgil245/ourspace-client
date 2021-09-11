import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  message: String = "";

  constructor(private httpClient: HttpClient) {  }

    // file from event.target.files[0]
    uploadFile(selectedFile: any): void {

      const uploadImageData = new FormData();
          uploadImageData.append('imageFile', selectedFile, selectedFile.name);
          //Make a call to the Spring Boot Application to save the image
          this.httpClient.post('http://localhost:9000/api/signup', uploadImageData, { observe: 'response' })
            .subscribe((response) => {
              if (response.status === 200) {
                this.message = 'Image uploaded successfully';
              } else {
                this.message = 'Image not uploaded successfully';
              }
            }
            );
  }
}
