import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAllLikesByUserService {

  constructor(private httpCli: HttpClient) { }

  getAllLikesByUserId(userId:number){
    console.log(userId);
    return this.httpCli.get<any>(`http://localhost:9000/ourspaceserver/api/like/${userId}`, {withCredentials: true});
  }
}
