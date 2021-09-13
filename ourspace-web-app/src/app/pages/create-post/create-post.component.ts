import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'src/app/services/upload-file/upload-file.service';
import { UserService } from 'src/app/services/user.service';
import { NewUser } from 'src/app/models/NewUser'
import { Subscription } from 'rxjs';
import { CreatePostService } from 'src/app/services/create-post/create-post.service';
import { GetAllPostsByUserService } from 'src/app/services/get-all-posts-by-user/get-all-posts-by-user.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private uploadFileService: UploadFileService, private userServices: UserService, private createPostService: CreatePostService, private getAllPostsByUserService: GetAllPostsByUserService) { 
    console.log("constructor")
  }

  _post_text_content: string = "";
  _imgURL: any;
  selectedFile: any;
  added_pic:boolean = false;
  observer: Subscription = new Subscription;
  _userID: number = 0;
  user: any;
  imageName : string = "";
  totalPosts: number = 0;
  total: number |undefined;
  imagePath:string = "";

  ngOnInit(): void {
    this.observer = this.userServices.checkSession().subscribe(inSession =>{
      console.log(inSession);
      this.user = inSession.data;
    })
    setTimeout(() =>{this.getUserAmt()},2000)
  }

  fileSelected(event:any){
    this.added_pic = true;
    this.selectedFile = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = (_event) =>{
      this._imgURL = reader.result;
  }
  }

  getUserAmt(){
    this.getAllPostsByUserService.getAllPosts(this.user.userId).subscribe(post =>{
       this.totalPosts = post.length;
    })
  }

  submit(){
    this.getUserAmt()
    if(!this.added_pic){
      console.log("are you entering this if statement")
      this.imageName = "";
    this.createPostService.createPost(this._post_text_content, this.user, this.imageName).subscribe((data: any) => {
        console.log(data);
      }) 
      
    }
     else{
       console.log("are you entering this else statement")
      this.imageName = this.user.username + (this.totalPosts + 1);
      this.createPostService.createPost(this._post_text_content, this.user, this.imageName).subscribe((data: any) => {
          console.log(data);
        }) 
      }
      this.imagePath = "https://s3.us-east-2.amazonaws.com/project2.rev/postpics/" + this.imageName + ".PNG"
      this.uploadFileService.uploadFile('http://localhost:9000/ourspaceserver/s3/post',this.selectedFile, this.imagePath);
    }  
  }


