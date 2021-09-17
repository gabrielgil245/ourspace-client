import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAllLikesByPostService {

  constructor(private httpCli: HttpClient) { }

  getAll(postId:number){
    return this.httpCli.get<any>(`http://localhost:9000/ourspaceserver/api/like/post/${postId}`, {withCredentials: true});
  }
}
