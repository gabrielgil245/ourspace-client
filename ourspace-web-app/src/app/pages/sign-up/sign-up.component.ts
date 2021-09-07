import { Component, OnInit } from '@angular/core';

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
  _about_me: String | undefined;
  _profile_pic: String | undefined;

  constructor() { }

  ngOnInit(): void {
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
