import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  _emailInput: string = "";
  _isFound: boolean = false;
  _invalidEmailMessage: string = "";

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.checkSession().subscribe(data => {
      if (data.success){
        console.log(data)
        this.router.navigate([`/reset-password`]);
      }
    })
  }

  onSubmit(){
    if(this._emailInput == "" || this._emailInput == " ") {
      alert("Please enter a valid email address in the field");
    }
    this.userService.forgotPassword(this._emailInput).subscribe(data => {
      if (data.success){
        console.log(data)
        alert(data.message);
        this.router.navigate([""]);
      }
    })
  }

  checkEmail(){
    this.userService.getUserByEmail(this._emailInput).subscribe(user => {
      if (user.success){
        this._invalidEmailMessage = "";
      } else {
        this._invalidEmailMessage = "Email not found!";
      }
    })
  }

  removeMessage(){
    this._invalidEmailMessage = "";
  }
}
