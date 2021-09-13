import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  _emailInput: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }
}
