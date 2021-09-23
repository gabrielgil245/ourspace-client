import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {

  constructor(private httpCli: HttpClient, private genericService: GenericService) { }

  createPost(textContent:string, user:any, imagePath: string){
    console.log(user);
    return this.httpCli.post<any>(`${this.genericService.getServerDomain()}/ourspaceserver/api/post`,{
      postSubmitted: new Date().toJSON(),
      postDescription: textContent,
      user: {
        username: user.username,
        userId:user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        password:user.password,
        email:user.email
      },
        postImage: imagePath,
    }, {withCredentials: true});
  }
}
