import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollegeService } from 'src/app/services/college.service';
import Swal from 'sweetalert2';
import { College } from '../college';
import { CollegeAddComponent } from '../college-add/college-add.component';

@Component({
  selector: 'app-college-list',
  templateUrl: './college-list.component.html',
  styleUrls: ['./college-list.component.css']
})
export class CollegeListComponent implements OnInit {
  colleges:College[];
  abc:CollegeAddComponent["selectedUniversity"];


  constructor(private collegeService:CollegeService, private router: Router) { }

  ngOnInit(): void {
    this.getColleges();
  }
  
  private getColleges() {
    console.log(this.abc)
    this.collegeService.getColleges().subscribe(data =>{
      this.colleges=data;
    })
  }

  updateCollege(id:number)
  {
    console.log('inside updateuniversity')
    this.router.navigate(['admin/college-update',id]);
  }


  deleteCollege(id:number)
  { 
    this.collegeService.deleteCollege(id).subscribe(
      (data)=>{
        Swal.fire('Successfully deleted !!', 'College id : ' + id, 'success');
        setTimeout(function(){
          window.location.reload();
       }, 1000);
      }
    
    )
  }

}
