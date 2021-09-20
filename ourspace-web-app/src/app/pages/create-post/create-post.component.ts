import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'src/app/services/upload-file/upload-file.service';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { CreatePostService } from 'src/app/services/create-post/create-post.service';
import { GetAllPostsByUserService } from 'src/app/services/get-all-posts-by-user/get-all-posts-by-user.service';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private uploadFileService: UploadFileService, private userServices: UserService, private createPostService: CreatePostService, private getAllPostsByUserService: GetAllPostsByUserService, private genericService: GenericService) {
  }

  _post_text_content: string = "";
  _imgURL: any;
  selectedFile: any;
  added_pic:boolean = false;
  observer: Subscription = new Subscription;
  user: any;
  imageName : string = "";
  totalPosts: number = 0;
  imagePath:string = "";
  _classDisplay: string = "text-center show";
  _textInput: string = "rounded-pill";
  _rows: string = "1";


  ngOnInit(): void {
    this.observer = this.userServices.checkSession().subscribe(inSession =>{
      this.user = inSession.data;
    })
    setTimeout(() =>{this.getUserAmt()},2000)
  }

  fileSelected(event:any){ /* preview of image on create post page */
    this.added_pic = true;
    this.selectedFile = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = (_event) =>{
      this._imgURL = reader.result;
  }
  }

  getUserAmt(){ /* gets the total amount of posts by the user (relates to naming of images for S3) */
    this.getAllPostsByUserService.getAllPosts(this.user.userId).subscribe(post =>{
       this.totalPosts = post.length;
    })
  }

  submit(){
    console.log(this.added_pic);
    this.getUserAmt()
    if(!this.added_pic){ /* if no image provided, send the database no link for "postPic" */
      this.imageName = "";
    this.createPostService.createPost(this._post_text_content, this.user, this.imageName).subscribe((data: any) => {
      console.log(data)
      })
    }
     else{ /* if image provided, sends the link to database */
      this.imageName = this.user.username + (this.totalPosts + 1);
      this.imagePath = "https://s3.us-east-2.amazonaws.com/project2.rev/postpics/" + this.imageName + ".PNG"
      this.createPostService.createPost(this._post_text_content, this.user, this.imagePath).subscribe((data: any) => {
        console.log(data)
        })
      this.imagePath = "https://s3.us-east-2.amazonaws.com/project2.rev/postpics/" + this.imageName + ".PNG"
      this.uploadFileService.uploadFile(`${this.genericService.getLocalServerDomain()}/ourspaceserver/s3/post`,this.selectedFile, this.imageName);
     }
     this.hideButton();
    }

    showButton(){
      this._classDisplay = "text-center show";
      this._textInput = "rounded";
      this._rows = "5";
    }

    hideButton(){
      this._classDisplay = "text-center visually-show"
      this._textInput = "rounded-pill";
      this._rows = "1";
      this._post_text_content = "";
    }
  }


