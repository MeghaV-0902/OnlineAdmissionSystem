import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {MatListModule} from '@angular/material/list';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { StudentGuard } from './services/student.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';




@NgModule({

  declarations: [
    AppComponent, NavbarComponent, FooterComponent, SignupComponent, LoginComponent, HomeComponent, DashboardComponent, UserDashboardComponent, ProfileComponent, SidebarComponent, WelcomeComponent],
  imports: [
    BrowserModule,MatListModule,FormsModule,BrowserAnimationsModule,RouterModule,AppRoutingModule,MatInputModule,MatFormFieldModule,MatButtonModule,HttpClientModule,MatSnackBarModule,MatCardModule,MatToolbarModule,MatIconModule ],
  providers: [AdminGuard,StudentGuard,authInterceptorProviders],
  bootstrap: [ AppComponent ]
})

export class AppModule { }

