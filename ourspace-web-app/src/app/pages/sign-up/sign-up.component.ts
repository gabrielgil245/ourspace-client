import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UploadFileService } from 'src/app/service/upload-file.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  _username: String = "";
  _password: String = "";
  _first_name: String = "";
  _last_name: String = "";
  _email: String = "";
  _birthday: Date | undefined;
  _about_me: String = "";
  _imgURL: any;
  _fileSrc: any;
  selectedFile: any;
  observer: Subscription = new Subscription;

  constructor(private uploadFileService:UploadFileService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.observer.unsubscribe();
  }

/*   fileSelected(files: any){
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) =>{
      this._imgURL = reader.result;
    }
  } */
    fileSelected(event:any){  
      this.selectedFile = event.target.files[0];
      var reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    this._imgURL = reader.result;
    }
    

  displayInfo(){
    this.uploadFileService.uploadFile(this.selectedFile);
    
/*     console.log(this._username);
    console.log(this._password);
    console.log(this._first_name);
    console.log(this._last_name);
    console.log(this._email);
    console.log(this._birthday);
    console.log(this._about_me); */
  }
}


