import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { GetAllPostsByPageService } from 'src/app/services/get-all-posts-by-page/get-all-posts-by-page.service';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges {


  post: any = [];
  liked:boolean = false;

  observer: Subscription = new Subscription;

  @Input()
  _pageNumber: number = 1;

  @Input()
  _loggedInUserID: number = 0;

  constructor(
    private getAllPostsByPage: GetAllPostsByPageService,
    private postService: PostService) {
    
  }

  ngOnInit(): void {
  
  }

  ngOnChanges(): void{
    this.observer = this.getAllPostsByPage.getPosts(this._pageNumber).subscribe(data =>{
      this.post = data;   /* gets the post based on page number */
    })
  }

  posts(): Array<Post> {
    return  this.post;  /*returns the array of posts retrieved onInit() */
  }

}
