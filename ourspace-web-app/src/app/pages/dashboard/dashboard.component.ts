import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService, private generic: GenericService) { }

  ngOnInit(): void {
  }



}
