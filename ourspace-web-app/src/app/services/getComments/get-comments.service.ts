import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class GetCommentsService {

  constructor(private httpCli: HttpClient, private genericService: GenericService) { }

  getCommentsForPost(postId:number){
    return this.httpCli.get<any>(`${this.genericService.getLocalServerDomain()}/ourspaceserver/api/comment/${postId}`, {withCredentials: true})
  }
}
