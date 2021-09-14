import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAllPostsByPageService {

  constructor(private httpCli: HttpClient) { }

getPosts(pageNumber: number){
  return this.httpCli.get<any>(`http://localhost:9000/ourspaceserver/api/post/?pageNumber=${pageNumber}`, {withCredentials: true});
}
}
