import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadFileService } from 'src/app/services/upload-file/upload-file.service';
import { UserService } from 'src/app/services/user.service';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  closeModal: string = "";
  _username: string = "";
  _password: string = "";
  _first_name: string = "";
  _last_name: string = "";
  _email: string = "";
  _birthday: any;
  _about_me: string = "";
  _imgURL: any;
  _altName: string = "";
  selectedFile: any;
  added_pic:boolean = false;
  success:boolean = false;
  profilePic: string = "";

  constructor(private uploadFileService:UploadFileService,
              private userService: UserService,
              private router: Router,
              private modalService: NgbModal,
              private datePipe: DatePipe) { }


  ngOnInit(): void {
    this.userService.checkSession().subscribe(data => {
      console.log(data)
      if (data.success){
        this._username = data.data.username;
        this._first_name = data.data.firstName;
        this._last_name = data.data.lastName;
        this._email = data.data.email;
        this._about_me = data.data.aboutMe;
        this._birthday = this.datePipe.transform(data.data.birthday, 'yyyy-MM-dd');
        this._imgURL = (data.data.profilePic == null || data.data.profilePic == "") ? "https://picsum.photos/200" : data.data.profilePic;
        this._altName = (data.data.profilePic == null || data.data.profilePic == "") ? "Lorem Picsum Photo" : data.data.firstName + " Profile Photo";
        console.log(this._imgURL)
        console.log(this._altName)
      } else {
        alert("Page Not Found")
        this.router.navigate([`/`]);
      }
    })

  }

  fileSelected(event:any){ /* displays preview of image */
        this.added_pic = true;
        this.selectedFile = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(this.selectedFile);
        reader.onload = (_event) =>{
          this._imgURL = reader.result;
      }
  }

  submit(){
    /* if user chooses not to include a profile pic*/
    if(!this.added_pic) {
    this.profilePic = this._imgURL;
    console.log(this.profilePic);
    this.userService.editProfile(this._first_name, this._last_name, this._birthday, this._about_me, this.profilePic).subscribe((data: any) => {
      this.success = data.success;
      console.log(data);
    })
    } else if(this.added_pic){ /* If they include a profile pic, includes the link */
        this.profilePic = "https://s3.us-east-2.amazonaws.com/project2.rev/profilepics/" + this._username + ".PNG"
        this.userService.editProfile(this._first_name, this._last_name, this._birthday, this._about_me, this.profilePic).subscribe((data: any) => {
          this.success = data.success;
          console.log(data);
        })
        this.uploadFileService.uploadFile('http://localhost:9000/ourspaceserver/s3/signup',this.selectedFile, this._username);
    }
    this.router.navigate([`/`]);
  }

  triggerModal(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
