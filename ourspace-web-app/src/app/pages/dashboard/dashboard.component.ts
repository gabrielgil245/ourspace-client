import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  pageNumber:number=1;
  _userId:number = 0;

  ngOnInit(): void {
    this.userService.checkSession().subscribe(data => {
      console.log(data)
      if (data.success){
        this.router.navigate([`/dashboard`]);
        this._userId = data.data.userId
      } else {
        this.router.navigate([``]);
      }
    })
    if (location.search.indexOf("reload=true") != -1) {
      // refresh the page, but no "reload" this time
      location.href = "/dashboard";
    }
  }

  nextPage(){
    this.pageNumber+=1;
  }

  backPage(){
    this.pageNumber-=1;
  }



}
