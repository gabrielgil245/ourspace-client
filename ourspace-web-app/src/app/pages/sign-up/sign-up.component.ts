import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UploadFileService } from 'src/app/services/upload-file/upload-file.service';
import { NewUser } from 'src/app/models/NewUser'
import { CreateNewUserService } from 'src/app/services/create-new-user/create-new-user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  _username: string = "";
  _password: string = "";
  _first_name: string = "";
  _last_name: string = "";
  _email: string = "";
  _birthday: Number = 0;
  _about_me: string = "";
  _imgURL: any;
  _fileSrc: any;
  selectedFile: any;
  added_pic:boolean = false;


  constructor(private uploadFileService:UploadFileService, private createNewUserService:CreateNewUserService) { }

  ngOnInit(): void {
  }

  @Input()
  newUser: NewUser = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    birthday: 0,
    aboutMe: ""
  }

/*   fileSelected(files: any){
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) =>{
      this._imgURL = reader.result;
    }
  } */
    fileSelected(event:any){  
      this.added_pic = true;
      this.selectedFile = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = (_event) =>{
        this._imgURL = reader.result;
      }
      }
    

  submit(){
      this.newUser.username = this._username;
      this.newUser.password = this._password;
      this.newUser.firstName = this._first_name;
      this.newUser.lastName = this._last_name;
      this.newUser.email = this._email;
      this.newUser.birthday = this._birthday;
      this.newUser.aboutMe = this._about_me;
      this.createNewUserService.createNewUser(this.newUser);

    if(this.added_pic){
    this.uploadFileService.uploadFile('http://localhost:9000/ourspaceserver/s3/signup',this.selectedFile, this._username);
    }
    
/*     console.log(this._username);
    console.log(this._password);
    console.log(this._first_name);
    console.log(this._last_name);
    console.log(this._email);
    console.log(this._birthday);
    console.log(this._about_me); */
  }
}


