import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  _emailInput: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    //email in Database
    let _existingEmail: string = "testuser123@test.com";
    console.log(this._emailInput);
    if (this._emailInput == _existingEmail) {
      console.log("HTTP Request was conducted!");
      this._emailInput = "";
    } else {
      console.log("The email entered does not exist in our database.");
      this._emailInput = "";
    }
  }
}
