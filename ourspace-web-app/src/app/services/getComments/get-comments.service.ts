import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCommentsService {

  constructor(private httpCli: HttpClient) { }

  getCommentsForPost(postId:number){
    return this.httpCli.get<any>(`http://localhost:9000/ourspaceserver/api/comment/${postId}`, {withCredentials: true})
  }
}
