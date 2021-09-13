import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {

  constructor(private httpCli: HttpClient) { }

  createPost(textContent:string, user:any, imageName: string){
    console.log(user);
    return this.httpCli.post<any>("http://localhost:9000/ourspaceserver/api/post",{
      postSubmitted: new Date().toJSON(),
      postDescription: textContent,
      postImage: "https://s3.us-east-2.amazonaws.com/project2.rev/postpics/" + imageName + ".PNG",
      user: {
        username: user.username,
        userId:user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        password:user.password,
        email:user.email
      }
    }, {withCredentials: true});
  }
}
