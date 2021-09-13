import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenericService } from 'src/app/services/generic.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', ]
})
export class LoginComponent implements OnInit {

  _username: string = "";
  _password: string = "";
  _userId: number = 0;
  _isInvalidUsername: boolean = false;
  _isInvalidPassword: boolean = false;
  _invalidUsernameMessage: string = "";
  _invalidPasswordMessage: string = "";
  _isFound: boolean = false;

  constructor(private userService: UserService, private generic: GenericService, private router:Router) { }

  ngOnInit(): void {
    this.userService.checkSession().subscribe(data => {
      console.log(data)
      if (data.success){
        this.router.navigate([`/dashboard`]);
      }
    })
  }

  userLogin(){
    this.userService.userLogin(this._username, this._password).subscribe(data => {
      console.log(data);

      if (data.success){
        this._userId = data.data.userId;
        console.log(this._userId);
        this.router.navigate([`/dashboard/`]);
      } else {
        this.checkPassword();
      }
    })

  }

  removeUsername(){
    this._invalidUsernameMessage = "";
  }

  removePassword(){
    this._invalidPasswordMessage = "";
  }

  checkUsername(){
    this.userService.getListOfUser().subscribe((users: any) => {
      this._isFound = false;
      users.data.forEach(((user: any) => {
        if (user.username == this._username){
          this._isFound = true;
          console.log("FOUND")
        }
        console.log(this._isFound)
        if(!this._isFound){
          this._invalidUsernameMessage = "Username not found!";
        } else {
          this.removeUsername();
        }
      })

    )})
  }

  checkPassword(){
    if (this._password == ""){
      this._invalidPasswordMessage = "Password is empty";
    } else {
      this._invalidPasswordMessage = "Invalid password";
    }

  }

  signupPage(){
    this.router.navigate([`/signup`]);
  }
}
