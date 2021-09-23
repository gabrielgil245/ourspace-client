import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class CreateCommentService {

  constructor(private httpCli: HttpClient, private genericService: GenericService) { }

  postComment(comment:string, postId: number, userId:number){
    return this.httpCli.post<any>(`${this.genericService.getServerDomain()}/ourspaceserver/api/comment`, {
      user: {
        userId: userId
            },
    post:{
      postId:postId
         },
    commentDescription: comment,
    }, {withCredentials: true});
  }
}
