import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { UserSidebarComponent } from './pages/user/user-sidebar/user-sidebar.component';
import { UserWelcomeComponent } from './pages/user/user-welcome/user-welcome.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewStudentsComponent } from './pages/admin/view-students/view-students.component';
import { UniversityListComponent } from './pages/university/university-list/university-list.component';
import { UniversityAddComponent } from './pages/university/university-add/university-add.component';
import { CollegeAddComponent } from './pages/college/college-add/college-add.component';
import { CollegeListComponent } from './pages/college/college-list/college-list.component';
import { UniversityUpdateComponent } from './pages/university/university-update/university-update.component';
import { ApplicationAddComponent } from './pages/application/application-add/application-add.component';
import { ApplicationListComponent } from './pages/application/application-list/application-list.component';
// import { CollegeCourseComponent } from './pages/college/college-course/college-course.component';
import { UniversityCourseComponent } from './pages/university/university-course/university-course.component';
import { CollegeCourseComponent } from './pages/college-course/college-course.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { CollegeUpdateComponent } from './pages/college/college-update/college-update.component';
import { CollegeCourseListComponent } from './pages/college-course-list/college-course-list.component';
import { UniversityCourseListComponent } from './pages/university/university-course-list/university-course-list.component';
import { ViewApplicationComponent } from './pages/application/view-application/view-application.component';







@NgModule({

  declarations: [
    AppComponent,CollegeCourseComponent, NavbarComponent, FooterComponent, SignupComponent, LoginComponent, HomeComponent, DashboardComponent, UserDashboardComponent, ProfileComponent, SidebarComponent, WelcomeComponent, UserSidebarComponent, UserWelcomeComponent, UpdateUserComponent, ViewStudentsComponent,UpdateStudentComponent, UniversityListComponent, UniversityAddComponent, CollegeAddComponent, CollegeListComponent, UniversityUpdateComponent, ApplicationAddComponent, ApplicationListComponent, UniversityCourseComponent, CollegeUpdateComponent, CollegeCourseListComponent, UniversityCourseListComponent, ViewApplicationComponent, ],
  imports: [
    BrowserModule,ReactiveFormsModule,MatListModule,FormsModule,BrowserAnimationsModule,RouterModule,AppRoutingModule,MatInputModule,MatFormFieldModule,MatButtonModule,HttpClientModule,MatSnackBarModule,MatCardModule,MatToolbarModule,MatIconModule ],
  providers: [AdminGuard,StudentGuard,authInterceptorProviders],
  bootstrap: [ AppComponent ]
})

export class AppModule { }

