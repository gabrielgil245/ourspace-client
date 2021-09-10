import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  fileSelected(files: any){
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) =>{
      this._imgURL = reader.result;
    }

/*     fileSelected(imageInput: HTMLInputElement){
      if(imageInput != null){
      const file: File = imageInput.files[0];
      const reader = new FileReader();
      reader.addEventListener('load',(event:any) =>{
        this._imgURL = event.target.result;
      })
    }
    } */

  }

  displayInfo(){
    console.log(this._username);
    console.log(this._password);
    console.log(this._first_name);
    console.log(this._last_name);
    console.log(this._email);
    console.log(this._birthday);
    console.log(this._about_me);
  }
}
