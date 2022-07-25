import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollegeCourseService } from 'src/app/services/college-course.service';
import { CollegeCourse } from './college-course';

@Component({
  selector: 'app-college-course',
  templateUrl: './college-course.component.html',
  styleUrls: ['./college-course.component.css']
})
export class CollegeCourseComponent implements OnInit {

  collegecourse: CollegeCourse = new CollegeCourse;
  public course = {
    id: null,
    collegeCourseName: '',
    collegeCourseDuration: '',
    code: '',
  }

  constructor(private collegeCourseService: CollegeCourseService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.course.id = this.collegecourse.id;
    this.course.collegeCourseName = this.collegecourse.collegeCourseName;
    this.course.collegeCourseDuration = this.collegecourse.collegeCourseDuration;
    this.course.code = this.collegecourse.code;

    console.log(this.collegecourse);
    this.saveCollegeCourse();
    alert("Course Added !.");
    this.goToCourses();
  }

  saveCollegeCourse() {
    this.collegeCourseService.addCollegeCourse(this.course).subscribe(data => {
      console.log(data);
      console.log(this.course)

    },
      error => console.log(error));
  }

  goToCourses() {
    console.log("Herer")
    this.router.navigate(['admin/college-course-list'])
  }



}
