import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from 'src/app/models/NewUser';

@Injectable({
  providedIn: 'root'
})
export class CreateNewUserService {

  constructor(private httpCli: HttpClient) { }


  createNewUser(newUser: NewUser){
    return this.httpCli.post<any>("http://localhost:9000/ourspaceserver/api/user", {
      username: newUser.username,
      password: newUser.password,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      birthday: newUser.birthday,
      aboutMe: newUser.aboutMe
    }, {withCredentials: true});
  }

  createNew(username:string, password:string, firstName:string, lastName: string, email:string, birthday:string, aboutMe:string){
    return this.httpCli.post<any>("http://localhost:9000/ourspaceserver/api/user", {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email,
      birthday: birthday,
      aboutMe: aboutMe
    }, {withCredentials: true});
  }
}
