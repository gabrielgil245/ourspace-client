import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class GetAllLikesByPostService {

  constructor(private httpCli: HttpClient, private genericService: GenericService) { }

  getAll(postId:number){
    return this.httpCli.get<any>(`${this.genericService.getServerDomain()}/ourspaceserver/api/like/post/${postId}`, {withCredentials: true});
  }
}
