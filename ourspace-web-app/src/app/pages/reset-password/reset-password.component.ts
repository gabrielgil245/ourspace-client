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
    console.warn("here")
    console.warn(this.resetPasswordForm.value)
    console.warn(this.resetPasswordForm.value)
    
  }

}
