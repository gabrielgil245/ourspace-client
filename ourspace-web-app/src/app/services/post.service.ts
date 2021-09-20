import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpCli: HttpClient, private genericService: GenericService) { }

  getPostsByUserAndPageNumber(username: string, pageNumber: number) {
    return this.httpCli.get<any>(`${this.genericService.getLocalServerDomain()}/ourspaceserver/api/post/${username}/${pageNumber}`, { withCredentials: true });
  }
}
