import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class GetAllPostsByPageService {

  constructor(private httpCli: HttpClient, private genericService: GenericService) { }

getPosts(pageNumber: number){
  return this.httpCli.get<any>(`${this.genericService.getServerDomain()}/ourspaceserver/api/post/?pageNumber=${pageNumber}`, {withCredentials: true});
}
}
