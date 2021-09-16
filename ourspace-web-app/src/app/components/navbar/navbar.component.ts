import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { GenericService } from 'src/app/services/generic.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {

  _classDisplay: string = "d-none";
  _email: string = "";
  @Input()
  _searchResult: string = "";
  @Input()
  user: User = {
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

  observer: Subscription = new Subscription;

  constructor(private httpCli: HttpClient,
              private userService: UserService,
              private generic: GenericService,
              private router: Router ) {
                this.observer = this.userService.checkSession().subscribe(user => {
                  this.user = {
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
                })
               }

  ngOnChanges(): void {
    this.observer = this.userService.checkSession().subscribe(data => {
      console.log(data);
      if (!data.success){
        //Add attribute binding to add a class name invisible to hide the menu buttons if no session found
        this._classDisplay = "d-none"
      } else {
        // If session found display the buttons
        this._classDisplay = "d-flex mt-3"
      }
    })
  }

  ngOnInit(): void {
    this.userService.checkSession().subscribe(data => {
      console.log(data);
      if (!data.success){
        //Add attribute binding to add a class name invisible to hide the menu buttons if no session found
        this._classDisplay = "d-none"
      }
    })
    this.router.events.subscribe(data =>{
      if(data instanceof NavigationStart){
        if(data.url == ("/dashboard" || "/create-post" || "/user-profile")){
        // If session found display the buttons
        this._classDisplay = "d-flex mt-3"
        }
      }
    })
  }

  logout(){
    this.userService.logout().subscribe(user =>{
      console.log(user)
      if (user.success){
        this.router.navigate([`/`]);
      }
    })
  }

  searchUsername() {
    let username: string = this._searchResult;
    this._searchResult = "";
    this.userService.getUserByUsername(username).subscribe(user => {
      if (user.success) {
        this.router.navigate([`/user-profile/${username}`]);
      }
    });
  }

  viewProfile() {
    let username: string = this.user.username;
    this.router.navigate([`/user-profile/${username}`]);
  }
}
