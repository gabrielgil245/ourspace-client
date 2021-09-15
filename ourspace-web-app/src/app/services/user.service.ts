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

  getListOfUser(){
    return this.httpCli.get<any>("http://localhost:9000/ourspaceserver/api/user", {withCredentials: true});
  }

  getUserByEmail(email: string){
    return this.httpCli.get<any>("http://localhost:9000/ourspaceserver/api/user/"+ email, {withCredentials: true});
  }

  checkSession(){
    return this.httpCli.get<any>("http://localhost:9000/ourspaceserver/api/check-session", {withCredentials: true});
  }

  logout(){
    return this.httpCli.get<any>("http://localhost:9000/ourspaceserver/api/logout", {withCredentials: true});
  }

  createNew(username:string, password:string, firstName:string, lastName: string, email:string, birthday:any, aboutMe:string, profilePic?:string){
    return this.httpCli.post<any>("http://localhost:9000/ourspaceserver/api/user", {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email,
      birthday: birthday,
      aboutMe: aboutMe,
      profilePic: profilePic
    }, {withCredentials: true});
  }


  resetPassword(email: string, password: string){
    return this.httpCli.patch<any>("http://localhost:9000/ourspaceserver/api/reset-password",{
      email: email,
      password: password
    }, {withCredentials: true});
  }

  forgotPassword(email: string){
    return this.httpCli.get<any>("http://localhost:9000/ourspaceserver/api/forgot-password/"+ email, {withCredentials: true});
  }


}
