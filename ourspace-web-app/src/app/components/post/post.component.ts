import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  _imagePostPath: string;
  _imageProfilePath: string;

  constructor() {
    this._imagePostPath = "https://picsum.photos/500/300";
    this._imageProfilePath = "https://picsum.photos/50/50";
  }

  ngOnInit(): void {
  }

  posts(n: number): Array<number> {
    return Array(n);
  }

}
