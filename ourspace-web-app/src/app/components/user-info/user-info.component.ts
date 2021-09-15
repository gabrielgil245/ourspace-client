import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User'
import { Subscription } from 'rxjs';


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


  _imagePath: string = "";
  _name: string = "";

  observer: Subscription = new Subscription;
  
  constructor(private userServices : UserService) {

    //this._imagePath = `https://s3.us-east-2.amazonaws.com/project2.rev/profilepics/${this.user.username}.PNG`
   
   }

  ngOnInit(): void {
    console.log(this.user);
    this._name = this.user.username;
    this._imagePath= this.user.profilePic;
  }


}
