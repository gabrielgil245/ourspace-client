import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  _imagePath: string;
  _name: string;
  constructor() {
    this._imagePath = "https://s3.us-east-2.amazonaws.com/project2.rev/CollectionHierarchy.PNG"
    this._name = "placeholder name, replace with User's name when backend implemented"
   }

  ngOnInit(): void {
  }

}
