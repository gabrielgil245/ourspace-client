import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User'



@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
@Input()
user : User = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
  birthday: "",
  aboutMe: "",
  profilePic: "",
  userId: 0
}

@Input()
postedDate: any;

  _imagePath: string = "";
  _name: string = "";
  _email: string = "";
  _datePosted: any;

  constructor(private router: Router ) {

   }

  ngOnInit(): void {
    this._name = this.user.username;
    this._imagePath= this.user.profilePic;
    this._email = this.user.email;
    this._datePosted = this.postedDate;
  }

  toUserProfile(){
    this.router.navigate([`/user-profile`], { queryParams: { username: this._name}});
  }

  stylePointer(){

  }
}
