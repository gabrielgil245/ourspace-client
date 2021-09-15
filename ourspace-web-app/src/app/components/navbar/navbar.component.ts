import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { GenericService } from 'src/app/services/generic.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  _classDisplay: string = "d-none";

  constructor(private httpCli: HttpClient,
              private userService: UserService,
              private generic: GenericService,
              private router: Router ) { }


  ngOnInit(): void {
    this.userService.checkSession().subscribe(data => {
      console.log(data)
      if (!data.success){
        //Add attribute binding to add a class name invisible to hide the menu buttons if no session found
        this._classDisplay = "d-none"
      }
    })
    this.router.events.subscribe(data =>{
      if(data instanceof NavigationStart){
        if(data.url == ("/dashboard" || "/create-post" || "/user-profile")){
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

}
