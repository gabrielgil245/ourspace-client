import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetAllLikesByPostService } from 'src/app/services/get-all-likes-by-post/get-all-likes-by-post.service';
import { GetAllLikesByUserService } from 'src/app/services/get-all-likes-by-user/get-all-likes-by-user.service';
import { ToggleLikeService } from 'src/app/services/toggleLike/toggle-like.service';

@Component({
  selector: 'app-user-interaction',
  templateUrl: './user-interaction.component.html',
  styleUrls: ['./user-interaction.component.css']
})
export class UserInteractionComponent implements OnInit {


  liked!:boolean;
  _innerText! : string;
  likes: any = [];
  likesObserver: Subscription = new Subscription;
  toggleLikeObserver: Subscription = new Subscription;
  totalLikes: number = 0;
  postLikes: any = [];

  @Input()
  _postID:number = 0;

  @Input()
  _loggedInUserID: number = 0;

  constructor( private getAllLikesByUser: GetAllLikesByUserService, private toggleLikes:ToggleLikeService, private getAllLikesByPost: GetAllLikesByPostService ) { 
    setTimeout(() =>{
      this.likesObserver = this.getAllLikesByUser.getAllLikesByUserId(this._loggedInUserID).subscribe(like =>{
        for(let given of like){
           if(this._postID == given.post.postId)
           {
              this.liked = true;
              this._innerText = "Post Liked";
              break;
           }
           this._innerText = "Like Post";
           this.liked = false;
        };
      })
      if(this.liked == null){
        this._innerText = "Like Post";
        this.liked = false;
      }
    },50)
    this.getAllLikesForPost()
  }

  ngOnInit(): void {

  }

  getAllLikesForPost(){
    this.postLikes = this.getAllLikesByPost.getAll(this._postID).subscribe(index =>{
      this.totalLikes = index.length;
    })
  }

  toggleLike(){
    this.liked = !this.liked;
    if(this.liked){
      this._innerText = "Post Liked!";
      this.toggleLikeObserver = this.toggleLikes.toggleLike(this._postID, this._loggedInUserID).subscribe(toggle =>{
      });
    } else{
      this._innerText = "Like Post";
      this.toggleLikes.toggleLike(this._postID, this._loggedInUserID).subscribe(toggle =>{
      });
    }
  }

}
