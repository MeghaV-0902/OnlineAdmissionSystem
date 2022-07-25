import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationServiceService } from 'src/app/services/application-service.service';
import { CollegeCourseService } from 'src/app/services/college-course.service';
import { CollegeService } from 'src/app/services/college.service';
import { LoginService } from 'src/app/services/login.service';
import { UniversityService } from 'src/app/services/university.service';
import { CollegeCourse } from '../../college-course/college-course';
import { College } from '../../college/college';
import { UniversityCourse } from '../../university-course';
import { UniversityCourseServiceService } from '../../university-course-service.service';
import { University } from '../../university/university';
import { Application } from '../application';

@Component({
  selector: 'app-application-add',
  templateUrl: './application-add.component.html',
  styleUrls: ['./application-add.component.css']
})
export class ApplicationAddComponent implements OnInit {

  user = null;
  application: Application = new Application();
  universities: University[];
  colleges: College[];
  universityCourse: UniversityCourse[];
  collegeCourse: CollegeCourse[];

  @ViewChild('unis') unis!: ElementRef;
  selectedUniversity = '';
  @ViewChild('clgs') clgs!: ElementRef;
  selectedColleges = '';
  @ViewChild('unicourse') unicourse!: ElementRef;
  selectedUniCourse = '';
  @ViewChild('clgcourse') clgcourse!: ElementRef;
  selectedClgCourse = '';
  constructor(private applicationService: ApplicationServiceService, private router: Router, private login: LoginService, private universityService: UniversityService, private collegService: CollegeService, private ccs: CollegeCourseService, private ucs: UniversityCourseServiceService) { }




  ngOnInit(): void {

    this.universityService.getUniversities().subscribe(
      data => {
        this.universities = data
      }
    )

    this.collegService.getColleges().subscribe(
      data => {
        this.colleges = data
      }
    )
    this.ccs.getCollegeCourses().subscribe(
      data => {
        this.collegeCourse = data
      }
    )

    this.ucs.getUniversityCourses().subscribe(
      data => {
        this.universityCourse = data
      }
    )

    this.login.getCurrentUser().subscribe(
      (user: any) => {
        this.user = user;
        console.log(this.user)
        this.application.name = this.user.firstName + " " + this.user.middleName + " " + this.user.lastName;
        this.application.email = this.user.email;
        this.application.phone = this.user.mobileNumber;
      }
    );

  }

  saveApplication() {
    if (this.selectedClgCourse == null) {
      this.application.course = this.selectedUniCourse
    }
    else {
      this.application.course = this.selectedClgCourse
    }

    if (this.selectedUniCourse == null) {
      this.application.course = this.selectedClgCourse
    }
    else {
      this.application.course = this.selectedUniCourse
    }

    this.applicationService.addApplication(this.application).subscribe(data => {
      console.log(data);
      this.router.navigate(['user-dashboard/view-application'])
      // alert("Applied Successfully");
    },
      error => console.log(error));
  }



  onSubmit() {
    console.log(this.applicationService);
    this.saveApplication();
    alert("Thank you Applying.Please wait for status update");
  }

  onSelected(): void {
    this.selectedUniversity = this.unis.nativeElement.value;
    this.selectedColleges = this.clgs.nativeElement.value;
    this.selectedUniCourse = this.unicourse.nativeElement.value;
    this.selectedClgCourse = this.clgcourse.nativeElement.value;
  }

  validateForm() {
    console.log('inside validateform function')
    let x = document.forms["applicationform"]["name"].value;
    let y = document.forms["applicationform"]["email"].value;
    let v = document.forms["applicationform"]["phone"].value;
    if (x == '' || y == '' || v == '') {
      alert('Field cannot be empty');
      //return false;
    }
    else {
      this.saveApplication();
      alert("University Added Successfully.");
    }
  }

}
