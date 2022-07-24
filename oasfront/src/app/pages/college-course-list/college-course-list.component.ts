import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollegeCourseService } from 'src/app/services/college-course.service';
import Swal from 'sweetalert2';
import { CollegeCourse } from '../college-course/college-course';

@Component({
  selector: 'app-college-course-list',
  templateUrl: './college-course-list.component.html',
  styleUrls: ['./college-course-list.component.css']
})
export class CollegeCourseListComponent implements OnInit {
  collegeCourse: CollegeCourse[]
  cid=0;

  constructor(private collegeCourseService:CollegeCourseService,private router: Router) { } 

  ngOnInit(): void {
    this.getCollegeCourses();
  }

  getCollegeCourses()
  {
    this.collegeCourseService.getCollegeCourses().subscribe(data =>{
      this.collegeCourse=data;
    })
  } 

  deleteCollegeCourse(id:number)
  {  
    this.collegeCourseService.deleteCollegeCourse(id).subscribe(
      (data)=>{
        Swal.fire('Successfully deleted !!', 'Course id : ' + id, 'success');
        setTimeout(function(){
          window.location.reload();
       }, 2000);
      }
    
    )
  }

}
