import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniversityCourse } from '../../university-course';
import { UniversityCourseServiceService } from '../../university-course-service.service';

@Component({
  selector: 'app-university-course',
  templateUrl: './university-course.component.html',
  styleUrls: ['./university-course.component.css']
})
export class UniversityCourseComponent implements OnInit {
  universitycourse: UniversityCourse = new UniversityCourse;
  public course = {
    id: null,
    universityCourseName: '',
    universityCourseDuration: '',
    code: '',
  }

  constructor(private uniersityCourseService: UniversityCourseServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.course.id = this.universitycourse.id;
    this.course.universityCourseName = this.universitycourse.universityCourseName;
    this.course.universityCourseDuration = this.universitycourse.universityCourseDuration;
    this.course.code = this.universitycourse.code;

    console.log(this.universitycourse);
    this.saveUniversityCourse();
    alert("Course Added !.");
    this.goToCourses();
  }

  saveUniversityCourse() {
    this.uniersityCourseService.addUniversityCourse(this.course).subscribe(data => {
      console.log(data);
      console.log(this.course)

    },
      error => console.log(error));
  }

  goToCourses() {
    console.log("Herer")
    this.router.navigate(['admin/university-course-list'])
  }



}
