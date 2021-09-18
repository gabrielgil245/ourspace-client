import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UploadFileService } from 'src/app/services/upload-file/upload-file.service';
import { UserService } from 'src/app/services/user.service';
import { FormsModule } from '@angular/forms';

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
  _about_me: any;
  _imgURL: any;
  selectedFile: any;
  added_pic:boolean = false;
  success:boolean = false;
  profilePic: string = "";

  constructor(private uploadFileService:UploadFileService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }



    fileSelected(event:any){ /* displays preview of image */
      this.added_pic = true;
      this.selectedFile = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = (_event) =>{
        this._imgURL = reader.result;
    }
    }



  submit(){
    if(!this.added_pic){
      /* if user chooses not to include a profile pic, imagelink is not included */
      this.userService.createNew(this._username, this._password, this._first_name, this._last_name, this._email, this._birthday, this._about_me).subscribe((data: any) => {
      this.success = data.success;
      console.log(data);
        // If successfully registered then login immediately
        if (data.success){
          this.userService.userLogin(this._username, this._password).subscribe(data => {
            if (data.success){
              console.log(data)
              this.router.navigate([`/dashboard/`]);
            } else {
              this.router.navigate([`/`]);
            }})
        } else {
          console.log(data.message)
          alert(data.message);
        }
      })
    } else if(this.added_pic){
      /* If they include a profile pic, includes the link */
      this.profilePic = "https://s3.us-east-2.amazonaws.com/project2.rev/profilepics/" + this._username + ".PNG"
      this.userService.createNew(this._username, this._password, this._first_name, this._last_name, this._email, this._birthday, this._about_me, this.profilePic).subscribe((data: any) => {
        if (data.success) {
          this.success = data.success
          console.log(data);
          this.uploadFileService.uploadFile('http://localhost:9000/ourspaceserver/s3/signup',this.selectedFile, this._username);

          // If successfully registered then login immediately
          this.userService.userLogin(this._username, this._password).subscribe(data => {
            if (data.success){
              console.log(data)
              this.router.navigate([`/dashboard/`]);
            } else {
              this.router.navigate([`/`]);
            }})
        } else {
          console.log(data.message)
          alert(data.message);
        }
      })
    }
  }


}


