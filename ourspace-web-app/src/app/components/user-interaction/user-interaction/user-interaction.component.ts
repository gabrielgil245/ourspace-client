import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetAllLikesByUserService } from 'src/app/services/get-all-likes-by-user/get-all-likes-by-user.service';
import { ToggleLikeService } from 'src/app/services/toggleLike/toggle-like.service';

@Component({
  selector: 'app-user-interaction',
  templateUrl: './user-interaction.component.html',
  styleUrls: ['./user-interaction.component.css']
})
export class UserInteractionComponent implements OnInit {

  post: any = [];
  liked!:boolean;
  _innerText! : string;
  likes: any = [];
  likesObserver: Subscription = new Subscription;
  toggleLikeObserver: Subscription = new Subscription;
  displayText:string = "";

  @Input()
  _postID:number = 0;

  @Input()
  _loggedInUserID: number = 0;

  constructor( private getAllLikesByUser: GetAllLikesByUserService, private toggleLikes:ToggleLikeService ) { 
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
    },50)
  }

  ngOnInit(): void {


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
