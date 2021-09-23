import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class GetAllPostsByUserService {

  constructor(private httpCli: HttpClient, private genericService: GenericService) { }

  getAllPosts(userId: number){
    return this.httpCli.get<any>(`${this.genericService.getServerDomain()}/ourspaceserver/api/post/${userId}`, {withCredentials: true});
  }
}
