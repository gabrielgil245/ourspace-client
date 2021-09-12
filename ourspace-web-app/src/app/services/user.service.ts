import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpCli: HttpClient) { }


  userLogin(username: string, password: string){
    return this.httpCli.post<any>("http://localhost:9000/ourspaceserver/api/login",{
      username: username,
      password: password
    }, {withCredentials: true});
  }


  checkSession(){
    return this.httpCli.get<any>("http://localhost:9000/ourspaceserver/api/check-session", {withCredentials: true});
  }

  logout(){
    return this.httpCli.get<any>("http://localhost:9000/ourspaceserver/api/logout", {withCredentials: true});
  }

  createNew(username:string, password:string, firstName:string, lastName: string, email:string, birthday:any, aboutMe:string){
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
