import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnChanges {

  _user: User = {
    userId: 0,
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    birthday: "",
    aboutMe: "",
    profilePic: ""
  };
  _pageNumber: number = 1;
  _profilePic: string = "";
  _isEmpty: boolean = false;
  observer: Subscription = new Subscription;
  _usernameParam: string = "";
  _userId: number = 0;
  
  constructor(
    private userService: UserService, 
    private router: Router, 
    private route: ActivatedRoute) {
      
    }

  ngOnInit(): void {   
    //Retrieving value from query parameter
    this.observer = this.route.queryParams.subscribe(params => {
      this._usernameParam = params['username'];
      console.log(this._usernameParam);
    })   
    
    this.userService.checkSession().subscribe(user => {
      if (user.success) {
        if(this._usernameParam == "") {
          this._user = {
            userId: user.data.userId,
            username: user.data.username,
            password: user.data.password,
            firstName: user.data.firstName,
            lastName: user.data.lastName,
            email: user.data.email,
            birthday: user.data.birthday,
            aboutMe: user.data.aboutMe,
            profilePic: user.data.profilePic
          }
          this._userId = user.data.userId;
          console.log(this._userId);
          this.router.navigate([`/user-profile/`], { queryParams: { username: user.data.username } });
        }
      } else {
        this.router.navigate([``]);
      }
    })  
    console.log(this._usernameParam);

    this.userService.getUserByUsername(this._usernameParam).subscribe(data => {
      if (data.data.profilePic == "" || data.data.profilePic == null) {
        this._isEmpty = true;
      }
      console.log(data);
      this._user = {
        userId: data.data.userId,
        username: data.data.username,
        password: data.data.password,
        firstName: data.data.firstName,
        lastName: data.data.lastName,
        email: data.data.email,
        birthday: data.data.birthday,
        aboutMe: data.data.aboutMe,
        profilePic: data.data.profilePic
      }
      this._userId = data.data.userId;
      console.log(this._userId);
    })
  }

  ngOnChanges(): void {
    
  }

  retrieveFromUsername() {
    this.userService.getUserByUsername(this._user.username).subscribe(user => {
      console.log(user);
      if (user.success) {
        this.router.navigate([`/user-profile/`], { queryParams: { username: user.data.username } });
      }
    });
  }

  nextPage() {
    this._pageNumber += 1;
  }

  backPage() {
    this._pageNumber -= 1;
  }

}
