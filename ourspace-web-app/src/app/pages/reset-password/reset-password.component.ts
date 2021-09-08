import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm = new FormGroup({
    password: new FormControl('',Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.resetPasswordForm.value.password!==this.resetPasswordForm.value.confirmPassword){
      alert("Passwords don't match.");
    } else{

    }
    
  }

}
