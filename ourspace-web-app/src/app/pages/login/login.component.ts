import { Component, OnInit } from '@angular/core';
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

  constructor(private userService: UserService, private generic: GenericService) { }

  ngOnInit(): void {
    this.userService.checkSession().subscribe(data => {
      if (data.success){
        this._userId = data.data.userId;
        console.log(this._userId);
        window.location.href = `${this.generic._localClientDomain}/dashboard`
      } else {
        window.location.href = `${this.generic._localClientDomain}`
      }
    })
  }

  userLogin(){



    this.userService.userLogin(this._username, this._password).subscribe(data => {
      console.log(data);

      if (data.success){
        this._userId = data.data.userId;
        console.log(this._userId);
        window.location.href = `${this.generic._localClientDomain}/dashboard`
      }
    })
  }
}
