import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetAllLikesByPostService } from 'src/app/services/get-all-likes-by-post/get-all-likes-by-post.service';
import { GetAllLikesByUserService } from 'src/app/services/get-all-likes-by-user/get-all-likes-by-user.service';
import { ToggleLikeService } from 'src/app/services/toggleLike/toggle-like.service';
import {NgbModal, ModalDismissReasons}
      from '@ng-bootstrap/ng-bootstrap';
import { GetCommentsService } from 'src/app/services/getComments/get-comments.service';
import { CreateCommentService } from 'src/app/services/create-comment/create-comment.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-user-interaction',
  templateUrl: './user-interaction.component.html',
  styleUrls: ['./user-interaction.component.css']
})
export class UserInteractionComponent implements OnInit, OnDestroy {


  liked!:boolean;
  _innerText! : string;
  likes: any = [];
  likesObserver: Subscription = new Subscription;
  toggleLikeObserver: Subscription = new Subscription;
  totalLikes: number = 0;
  postLikes: any = [];
  inner: string = "";
  showLikes: boolean = false;
  comments: any = [];
  postComments: any = [];
  totalComment: number = 0; // total of comments on each post
  innerComment: string = ""; //shows total comments
  submitCommentData: any;

  _comment: string = ""; // holds the comment input by the user

  @Input()
  _postID:number = 0;

  @Input()
  _loggedInUserID: number = 0;


  closeResult = '';
  
  constructor( private getAllLikesByUser: GetAllLikesByUserService, 
    private toggleLikes:ToggleLikeService, 
    private getAllLikesByPost: GetAllLikesByPostService, 
    private modalService: NgbModal,
    private getComments: GetCommentsService,
    private createComment: CreateCommentService ) { 
    setTimeout(() =>{
      this.likesObserver = this.getAllLikesByUser.getAllLikesByUserId(this._loggedInUserID).subscribe(like =>{
        if(like === null){
          this._innerText = "Like";
          this.liked = false;
        }
        else{
          for(let given of like){
            if(this._postID == given.post.postId)
            {
                this.liked = true;
                this._innerText = "Liked";
                break;
            }
            this._innerText = "Like";
            this.liked = false;
            }
        };
      })
    },50)
    setTimeout(() => this.getAllLikesForPost(), 75)
    setTimeout(() => this.getAllCommentsForPost(), 75)
    setTimeout(() => this.returnComments(), 75)
    setTimeout(() => this.returnLikes(), 75)
  }
  ngOnDestroy(): void {
    this.postComments.unsubscribe();
    this.postLikes.unsubscribe();
    this.toggleLikeObserver.unsubscribe();
    this.postLikes.unsubscribe();
    this.postComments.unsubscribe();
  }

  ngOnInit(): void {

  }

  getAllCommentsForPost(){ //method to determine the total number of comments and display as comment or comments
     this.postComments = this.getComments.getCommentsForPost(this._postID).subscribe(commentData =>{
        this.totalComment = commentData.data.length;
        if(this.totalComment == 1){
          this.innerComment = "1 Comment"
        }
        else{
          this.innerComment = this.totalComment + " Comments"
        }
     })
  }

  getAllLikesForPost(){ // determines total likes and displays like or likes depending on total number
    this.postLikes = this.getAllLikesByPost.getAll(this._postID).subscribe(index =>{
      this.totalLikes = index.data.length;
      this.inner = this.totalLikes <= 1 ? this.totalLikes + " Like" : this.totalLikes + " Likes";
        })
  }

  toggleLike(){ //adds/deletes like and changes inner text of like box
    this.liked = !this.liked;
    if(this.liked){
      this._innerText = "Liked!";
      this.toggleLikeObserver = this.toggleLikes.toggleLike(this._postID, this._loggedInUserID).subscribe(toggle =>{
      });
      this.totalLikes += 1;
      this.inner = this.totalLikes <= 1 ? this.totalLikes + " Like" : this.totalLikes + " Likes";
    }
    else{
      this._innerText = "Like";
      this.toggleLikes.toggleLike(this._postID, this._loggedInUserID).subscribe(toggle =>{
      });
      this.totalLikes -= 1;
      this.inner = this.totalLikes <= 1 ? this.totalLikes + " Like" : this.totalLikes + " Likes";
    }
  }

  returnLikes() : Array<any>{ //returns the list of likes to display who liked the post
    this.postLikes = this.getAllLikesByPost.getAll(this._postID).subscribe(index =>{
      this.likes = index});
    return this.likes;
  }
  
  returnComments() : Array<any>{ //returns the list of comments to display when comments is clicked
     this.postComments = this.getComments.getCommentsForPost(this._postID).pipe(take(1)).subscribe(index =>{
      this.comments = index});
    return this.comments;
  }

  submitComment(){
    this.submitCommentData = this.createComment.postComment(this._comment, this._postID, this._loggedInUserID).subscribe(data =>{
      console.log(data);
    });
    this._comment = "";
    setTimeout(() => this.getAllCommentsForPost(), 150)
    setTimeout(() => this.returnComments(), 200)
  }


  open(content: any) {
    this.returnLikes();
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

  openComments(content: any) {
    this.modalService.open(content,
   {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = 
         `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

}
