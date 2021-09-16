import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { GetAllLikesByUserService } from 'src/app/services/get-all-likes-by-user/get-all-likes-by-user.service';
import { GetAllPostsByPageService } from 'src/app/services/get-all-posts-by-page/get-all-posts-by-page.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges {


  post: any = [];
  liked:boolean = false;
  _innerText : string = "Like Post";
  likes: any = [];

  observer: Subscription = new Subscription;
  likesObserver: Subscription = new Subscription;

  @Input()
  _pageNumber: number = 1;

  @Input()
  _loggedInUserID: number = 0;

  constructor(private getAllPostsByPage: GetAllPostsByPageService, private getAllLikesByUser: GetAllLikesByUserService) {
    
  }

  ngOnInit(): void {
    this.observer = this.getAllPostsByPage.getPosts(this._pageNumber).subscribe(data =>{
      this.post = data;
    }) /* gets the post based on page number */
    setTimeout(() =>{
    this.likesObserver = this.getAllLikesByUser.getAllLikesByUserId(this._loggedInUserID).subscribe(like =>{
      this.likes = like;
    })
  },75)
  }

  ngOnChanges(): void{
    this.observer = this.getAllPostsByPage.getPosts(this._pageNumber).subscribe(data =>{
      this.post = data;
    })
    this.posts();
  }

  
retrievedLikes():Array<any>{
return Array(5);
}

  posts(): Array<Post> {
    return  this.post;  /*returns the array of posts retrieved onInit() */
  }

  toggleLike(){
    this.liked = !this.liked;
    if(this.liked){
      this._innerText = "Post Liked!";
    } else{
      this._innerText = "Like Post";
    }
  }

}
