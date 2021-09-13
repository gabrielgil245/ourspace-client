import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenericService } from 'src/app/services/generic.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService, private generic: GenericService, private router: Router) { }

  ngOnInit(): void {
       this.userService.checkSession().subscribe(data => {
      console.log(data)
      if (data.success){
        this.router.navigate([`/dashboard`]);
      } else {
        this.router.navigate([``]);
      }
    })   
  }



}
