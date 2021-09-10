import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  profileImageChangedStatus = 'init';
  uploadImageLabel = 'Choose file (max size 1MB)';
  imageFileIsTooBig = false;
  selectedFileSrc: string = "";

  constructor(private postService: PostComponent) {
    this.selectedFileSrc = '';
  }

  ngOnInit(): void {
  }



}
