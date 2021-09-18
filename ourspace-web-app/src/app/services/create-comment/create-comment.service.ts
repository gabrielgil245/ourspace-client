import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateCommentService {

  constructor(private httpCli: HttpClient) { }

  postComment(comment:string, postId: number, userId:number){
    console.log(comment);
    console.log(postId);
    console.log(userId);
    return this.httpCli.post<any>("http://localhost:9000/ourspaceserver/api/comment", {
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
