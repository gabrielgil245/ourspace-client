import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class ToggleLikeService {

  constructor(private httpCli: HttpClient, private genericService: GenericService) { }

  toggleLike(postID: number, userId: number){
   return this.httpCli.post<any>(`${this.genericService.getServerDomain()}/ourspaceserver/api/like`,{
      user: {
        userId: userId
      },
      post:{
          postId: postID
      }
    },{withCredentials: true});
  }


}
