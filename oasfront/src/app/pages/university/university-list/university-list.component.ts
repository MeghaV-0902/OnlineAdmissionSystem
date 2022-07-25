import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniversityService } from 'src/app/services/university.service';
import Swal from 'sweetalert2';
import { University } from '../university';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.css']
})
export class UniversityListComponent implements OnInit {
  universities: University[]
  uniId = 0;

  constructor(private universityService: UniversityService, private router: Router) { }

  ngOnInit(): void {
    this.getUniversities();
  }

  private getUniversities() {
    this.universityService.getUniversities().subscribe(data => {
      this.universities = data;
    })
  }

  updateUniversity(id: number) {
    console.log('inside updateuniversity')
    this.router.navigate(['admin/university-update', id]);
  }

  deleteUniversity(id: number) {
    this.universityService.deleteUniversity(id).subscribe(
      (data) => {
        Swal.fire('Successfully deleted !!', 'University id : ' + id, 'success');
        setTimeout(function () {
          window.location.reload();
        }, 2000);
      }

    )
  }

}
