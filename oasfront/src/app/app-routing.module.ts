import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { StudentGuard } from './services/student.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { UserWelcomeComponent } from './pages/user/user-welcome/user-welcome.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewStudentsComponent } from './pages/admin/view-students/view-students.component';
import { UniversityListComponent } from './pages/university/university-list/university-list.component';
import { UniversityAddComponent } from './pages/university/university-add/university-add.component';
import { CollegeListComponent } from './pages/college/college-list/college-list.component';
import { CollegeAddComponent } from './pages/college/college-add/college-add.component';
import { UniversityUpdateComponent } from './pages/university/university-update/university-update.component';
import { ApplicationAddComponent } from './pages/application/application-add/application-add.component';
import { ApplicationListComponent } from './pages/application/application-list/application-list.component';
import { UniversityCourseComponent } from './pages/university/university-course/university-course.component';
import { CollegeCourseComponent } from './pages/college-course/college-course.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { CollegeUpdateComponent } from './pages/college/college-update/college-update.component';
import { CollegeCourseListComponent } from './pages/college-course-list/college-course-list.component';
import { UniversityCourseListComponent } from './pages/university/university-course-list/university-course-list.component';
import { ViewApplicationComponent } from './pages/application/view-application/view-application.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [{
      path: '',
      component: WelcomeComponent,
    },
    {
      path: 'profile',
      component: ProfileComponent,
    },
    {
      path: 'update-user/:id',
      component: UpdateUserComponent,
    },
    {
      path: 'view-students',
      component: ViewStudentsComponent,
    },
    {
      path: 'update-student/:id',
      component: UpdateStudentComponent,
    },
    {
      path: 'university-list',
      component: UniversityListComponent,
    },
    {
      path: 'university-add',
      component: UniversityAddComponent,
    },
    {
      path: 'college-list',
      component: CollegeListComponent,
    },
    {
      path: 'college-add',
      component: CollegeAddComponent,
    },
    {
      path: 'university-update/:id',
      component: UniversityUpdateComponent,
    }
      ,
    {
      path: 'college-update/:id',
      component: CollegeUpdateComponent,
    },
    {
      path: 'application-list',
      component: ApplicationListComponent,
    },
    {
      path: 'college-course',
      component: CollegeCourseComponent,
    },
    {
      path: 'college-course-list',
      component: CollegeCourseListComponent,
    },
    {
      path: 'university-course',
      component: UniversityCourseComponent,
    },
    {
      path: 'university-course-list',
      component: UniversityCourseListComponent,
    },
    ]
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [StudentGuard],
    children: [
      {
        path: '',
        component: UserWelcomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'update-user/:id',
        component: UpdateUserComponent,
      },
      {
        path: 'application-add',
        component: ApplicationAddComponent,
      },
      {
        path: 'view-application',
        component: ViewApplicationComponent,
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
