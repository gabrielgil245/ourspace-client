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
    //HTTP request to check if the email inputted exists in the database
    if (this._emailInput == _existingEmail) {
      //HTTP request to have an email sent to the user.
      alert("An email was sent to the email address associated with your username!");
      this._emailInput = "";
    } else {
      console.log("The email entered does not exist in our database.");
      this._emailInput = "";
    }
  }
}
