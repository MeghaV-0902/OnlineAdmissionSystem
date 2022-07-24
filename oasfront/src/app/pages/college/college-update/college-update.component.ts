import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollegeService } from 'src/app/services/college.service';
import Swal from 'sweetalert2';
import { College } from '../college';

@Component({
  selector: 'app-college-update',
  templateUrl: './college-update.component.html',
  styleUrls: ['./college-update.component.css']
})
export class CollegeUpdateComponent implements OnInit {

  getCollege:College;
  id=0;
  public college=
  {
    id:0,
    name:'',
    email:'',
    location:'',
    phone:'',
    imageUrl:'',
  };
  constructor(private collegeService:CollegeService,private activeRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id=this.activeRoute.snapshot.params['id'];
    this.college.id=this.activeRoute.snapshot.params['id'];
    this.getCollegeById();
  }

  getCollegeById()
  {
      this.collegeService.getCollegeById(this.id).subscribe(
        (data:any)=>
        {
          console.log(data)
          this.getCollege=data
          this.college.name=data.name;
          this.college.email=data.email;
          this.college.location=data.location;
          this.college.phone=data.phone;
          console.log(this.getCollege)

        }
      );
  }

  
 
  onSubmit(){
    this.collegeService.updateCollege(this.getCollege).subscribe(
      (data:any)=>
      {
        console.log(data); 
        this.goToCollegePage();
        Swal.fire('Successfully updated !!', 'University id : ' + data.id+" is updated.", 'success');
      }
    )
    console.log('onsubmit works')
  }

  public goToCollegePage()
  {
    this.router.navigate(['admin/college-list'])
  }

}
 