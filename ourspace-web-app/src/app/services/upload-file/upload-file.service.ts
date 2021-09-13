import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  message: String = "";

  constructor(private httpClient: HttpClient) {  }

    uploadFile(url:any, selectedFile: any, username: string): void {
      const uploadImageData = new FormData();
          uploadImageData.append('imageFile', selectedFile, username + ".PNG");

          this.httpClient.post(url, uploadImageData, { observe: 'response' })
            .subscribe((response) => {
              if (response.status === 200) {
                this.message = 'Image uploaded successfully';
              } else {
                this.message = 'Image not uploaded successfully';
              }
            },
            );
  }
}