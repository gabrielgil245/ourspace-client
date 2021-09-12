import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UploadFileService } from 'src/app/services/upload-file/upload-file.service';
import { UserService } from 'src/app/services/user.service';

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
  _birthday: Date | undefined;
  _about_me: string = "";
  _imgURL: any;
  _fileSrc: any;
  selectedFile: any;
  added_pic:boolean = false;
  success:boolean = false;

  constructor(private uploadFileService:UploadFileService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }



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
    this.userService.createNew(this._username, this._password, this._first_name, this._last_name, this._email, this._birthday, this._about_me).subscribe((data: any) => {
      this.success = data.success;
      console.log(data);
    })
      if(this.added_pic){
        this.uploadFileService.uploadFile('http://localhost:9000/ourspaceserver/s3/signup',this.selectedFile, this._username);
      }
        this.router.navigate([`/`]);
    
  }
  
 
}


