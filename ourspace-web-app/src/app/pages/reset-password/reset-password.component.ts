import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GenericService } from 'src/app/services/generic.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  _email: any;
  _username: any;
  _password: string = "";
  _confirmPassword: string = "";
  _passwordNotMatchMessage: string = "";

  constructor(private userService: UserService, private generic: GenericService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      if (param.get('email') != ""){
        this.userService.checkSession().subscribe(data => {
          if (data.success){
            this._username = data.data.username;
            this._email = data.data.email;
            console.log(this._username)
            console.log(this._email)
          } else {
            this.route.paramMap.subscribe(param => {
              this._email = param.get('email');
              this.userService.getUserByEmail(this._email).subscribe(user => {
                if (user.success){
                  this._username =  user.data.username;
                }
              })
            })
          }
        })
      } else {
        alert("Page Not Found")
        this.router.navigate([``]);
      }
    })
  }

  resetPassword(){
    this.userService.checkSession().subscribe(data => {
      console.log(data)
      if (data.success){
        if (this._password == this._confirmPassword && this._confirmPassword != "" ){
          this.userService.resetPassword(this._email, this._password).subscribe(user => {
            if (user.success){
              alert(user.message);
              this.router.navigate([`/dashboard`]);
            }
          })
        }
      }
    })
  }


  checkPassword(){
    this.userService.userLogin(this._username, this._password).subscribe(data => {
      if (data.success){
        this._passwordNotMatchMessage = "Password must not be the same as previous.";
      } else {
        this._passwordNotMatchMessage = "";
      }
    })
  }

  checkPasswordMatch(){
    if (this._password != this._confirmPassword){
      this._passwordNotMatchMessage = "Password not matched.";
    } else {
      this._passwordNotMatchMessage = "";
    }
  }

  emptyField(){
    this._password = "";
    this._confirmPassword = "";
  }
}
