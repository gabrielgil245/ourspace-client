import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpCli: HttpClient) { }

  userLogin(username: string, password: string){
    return this.httpCli.post<any>("http://localhost:9000/ourspaceserver/api/login",{
      username: username,
      password: password
    }, {withCredentials: true});
    console.log(username, password)

  }
}
