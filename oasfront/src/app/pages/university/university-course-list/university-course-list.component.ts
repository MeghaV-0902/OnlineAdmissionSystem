import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UniversityCourse } from '../../university-course';
import { UniversityCourseServiceService } from '../../university-course-service.service';

@Component({
  selector: 'app-university-course-list',
  templateUrl: './university-course-list.component.html',
  styleUrls: ['./university-course-list.component.css']
})
export class UniversityCourseListComponent implements OnInit {
  universityCourse: UniversityCourse[]
  cid = 0;

  constructor(private universityCourseService: UniversityCourseServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getCollegeCourses();
  }
  getCollegeCourses() {
    this.universityCourseService.getUniversityCourses().subscribe(data => {
      this.universityCourse = data;
    })
  }

  deleteUniversityCourse(id: number) {
    this.universityCourseService.deleteUniversityCourse(id).subscribe(
      (data) => {
        Swal.fire('Successfully deleted !!', 'Course id : ' + id, 'success');
        setTimeout(function () {
          window.location.reload();
        }, 2000);
      }

    )
  }

}
