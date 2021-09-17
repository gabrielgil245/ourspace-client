import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetAllLikesByPostService } from 'src/app/services/get-all-likes-by-post/get-all-likes-by-post.service';
import { GetAllLikesByUserService } from 'src/app/services/get-all-likes-by-user/get-all-likes-by-user.service';
import { ToggleLikeService } from 'src/app/services/toggleLike/toggle-like.service';
import {NgbModal, ModalDismissReasons} 
      from '@ng-bootstrap/ng-bootstrap';

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
  inner: string = "";
  showLikes: boolean = false;

  @Input()
  _postID:number = 0;

  @Input()
  _loggedInUserID: number = 0;


  closeResult = '';
  
  constructor( private getAllLikesByUser: GetAllLikesByUserService, private toggleLikes:ToggleLikeService, private getAllLikesByPost: GetAllLikesByPostService, private modalService: NgbModal ) { 
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
    setTimeout(() => this.getAllLikesForPost(), 75)
  }

  ngOnInit(): void {

  }

  getAllLikesForPost(){
    this.postLikes = this.getAllLikesByPost.getAll(this._postID).subscribe(index =>{
      this.totalLikes = index.data.length;
      if(this.totalLikes == 1){
        this.inner = "1 Like"
      }
      else{
        this.inner = this.totalLikes + " Likes"
      }
        })
  }

  toggleLike(){
    this.liked = !this.liked;
    if(this.liked){
      this._innerText = "Post Liked!";
      this.toggleLikeObserver = this.toggleLikes.toggleLike(this._postID, this._loggedInUserID).subscribe(toggle =>{
      });
      this.totalLikes += 1;
      if(this.totalLikes == 1){
        this.inner = "1 Like"
      }
      else{
        this.inner = this.totalLikes + " Likes"
      }
    } 
    else{
      this._innerText = "Like Post";
      this.toggleLikes.toggleLike(this._postID, this._loggedInUserID).subscribe(toggle =>{
      });
      this.totalLikes -= 1;
      if(this.totalLikes == 1){
        this.inner = "1 Like"
      }
      else{
        this.inner = this.totalLikes + " Likes"
      }
    }
  }

  returnLikes() : Array<any>{
    this.postLikes = this.getAllLikesByPost.getAll(this._postID).subscribe(index =>{
      this.likes = index});
    return this.likes.data;
  }

  open(content: any) {
    this.modalService.open(content,
   {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = 
         `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
