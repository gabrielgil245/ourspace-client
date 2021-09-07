import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { NewPasswordComponent } from './pages/new-password/new-password.component';

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'signup', component: SignUpComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'new-password', component: NewPasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
