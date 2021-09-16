import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  pageNumber: number = 1;

  ngOnInit(): void {
    
  }

  nextPage() {
    this.pageNumber += 1;
  }

  backPage() {
    this.pageNumber -= 1;
  }

}
