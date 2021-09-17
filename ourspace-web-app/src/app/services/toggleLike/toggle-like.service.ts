import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleLikeService {

  constructor(private httpCli: HttpClient) { }

  toggleLike(postID: number, userId: number){
   return this.httpCli.post<any>("http://localhost:9000/ourspaceserver/api/like",{
      user: {
        userId: userId
      },
      post:{
          postId: postID
      }
    },{withCredentials: true});
  }


}
