import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAllPostsByUserService {

  constructor(private httpCli: HttpClient) { }

  getAllPosts(userId: number){
    return this.httpCli.get<any>(`http://localhost:9000/ourspaceserver/api/post/${userId}`, {withCredentials: true});
  }
}
