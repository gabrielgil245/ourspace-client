import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpCli: HttpClient, private genericService: GenericService) { }

  userLogin(username: string, password: string){
    return this.httpCli.post<any>(`${this.genericService.getServerDomain()}/ourspaceserver/api/login`,{
      username: username,
      password: password
    }, {withCredentials: true});
  }

  getListOfUser(){
    return this.httpCli.get<any>(`${this.genericService.getServerDomain()}/ourspaceserver/api/user`, {withCredentials: true});
  }

  getUserByEmail(email: string){
    return this.httpCli.get<any>(`${this.genericService.getServerDomain()}/ourspaceserver/api/user/${email}`, {withCredentials: true});
  }

  getUserByUsername(username: string) {
    return this.httpCli.get<any>(`${this.genericService.getServerDomain()}/ourspaceserver/api/username/${username}`, {withCredentials: true});
  }

  checkSession(){
    return this.httpCli.get<any>(`${this.genericService.getServerDomain()}/ourspaceserver/api/check-session`, {withCredentials: true});
  }

  logout(){
    return this.httpCli.get<any>(`${this.genericService.getServerDomain()}/ourspaceserver/api/logout`, {withCredentials: true});
  }

  createNew(username:string, password:string, firstName:string, lastName: string, email:string, birthday:any, aboutMe:string, profilePic?:string){
    return this.httpCli.post<any>(`${this.genericService.getServerDomain()}/ourspaceserver/api/user`, {
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
    return this.httpCli.patch<any>(`${this.genericService.getServerDomain()}/ourspaceserver/api/reset-password`,{
      email: email,
      password: password
    }, {withCredentials: true});
  }

  forgotPassword(email: string){
    return this.httpCli.get<any>(`${this.genericService.getServerDomain()}/ourspaceserver/api/forgot-password/${email}`, {withCredentials: true});
  }

  editProfile(firstName: string, lastName: string, birthday: any, aboutMe: string, profilePic?: any){
    return this.httpCli.patch<any>(`${this.genericService.getServerDomain()}/ourspaceserver/api/user`,{
      firstName: firstName,
      lastName: lastName,
      aboutMe: aboutMe,
      birthday: birthday,
      profilePic: profilePic
    }, {withCredentials: true});
  }
}
