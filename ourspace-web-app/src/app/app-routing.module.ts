import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'signup', component: SignUpComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
