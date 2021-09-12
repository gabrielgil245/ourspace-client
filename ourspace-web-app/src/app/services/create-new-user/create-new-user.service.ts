import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from 'src/app/models/NewUser';

@Injectable({
  providedIn: 'root'
})
export class CreateNewUserService {

  constructor(private httpClient: HttpClient) { }

  createNewUser(newUser: NewUser){
    console.log(newUser);
    this.httpClient.post<any>('http://localhost:9000/ourspaceserver/api/user', {
      username: newUser.username,
      password: newUser.password,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      birthday: newUser.birthday,
      aboutMe: newUser.aboutMe
    }, {withCredentials: true});
  }
}
