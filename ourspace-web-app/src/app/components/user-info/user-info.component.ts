import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NewUser } from 'src/app/models/NewUser'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
@Input()
user : NewUser = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
  birthday: "",
  aboutMe: ""
}


  _imagePath: string = "";
  _name: string;
  observer: Subscription = new Subscription;
  
  constructor(private userServices : UserService) {

    //this._imagePath = `https://s3.us-east-2.amazonaws.com/project2.rev/profilepics/${this.user.username}.PNG`
    this._name = "placeholder name, replace with User's name when backend implemented"
   }

  ngOnInit(): void {
    this.observer = this.userServices.checkSession().subscribe(inSession =>{
      console.log(inSession);
      
    })

  }


}
