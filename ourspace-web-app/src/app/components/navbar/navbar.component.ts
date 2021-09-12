import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private httpCli: HttpClient, private userService: UserService, private generic: GenericService) { }

  ngOnInit(): void {
  }

  logout(){
    return this.httpCli.get<any>(`${this.generic._localServerDomain}/api/logout`, {withCredentials: true});
  }
}
