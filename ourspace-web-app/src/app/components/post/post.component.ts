import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { GetAllPostsByPageService } from 'src/app/services/get-all-posts-by-page/get-all-posts-by-page.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  _imagePostPath: string;
  _imageProfilePath: string;
  post: any = {};

  observer: Subscription = new Subscription;

  @Input()
  _pageNumber: number = 1;

  constructor(private getAllPostsByPage: GetAllPostsByPageService) {
    this._imagePostPath = "https://picsum.photos/500/300";
    this._imageProfilePath = "https://picsum.photos/50/50";
  }

  ngOnInit(): void {
    this.observer = this.getAllPostsByPage.getPosts(this._pageNumber).subscribe(data =>{
      this.post = data;
    })
    setTimeout(() => {console.log(this.post)}, 3000);
  }

  

  posts(): Array<Post> {
    return this.post.data;
  }

}
