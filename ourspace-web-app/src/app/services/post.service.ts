import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpCli: HttpClient) { }

  getPostsByUserAndPageNumber(username: string, pageNumber: number) {
    return this.httpCli.get<any>(`http://localhost:9000/ourspaceserver/api/post/${username}/${pageNumber}`, { withCredentials: true });
  }
}
