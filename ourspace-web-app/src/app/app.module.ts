import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PostComponent } from './components/post/post.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
<<<<<<< HEAD
import { UserInteractionComponent } from './components/user-interaction/user-interaction/user-interaction.component';

=======
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { DatePipe } from '@angular/common';
>>>>>>> development

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    NavbarComponent,
    UserInfoComponent,
    DashboardComponent,
    PostComponent,
    CreatePostComponent,
    UserProfileComponent,
<<<<<<< HEAD
    UserInteractionComponent
=======
    EditProfileComponent
>>>>>>> development

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
