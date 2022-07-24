import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversityService } from 'src/app/services/university.service';
import Swal from 'sweetalert2';
import { University } from '../university';

@Component({
  selector: 'app-university-update',
  templateUrl: './university-update.component.html',
  styleUrls: ['./university-update.component.css']
})
export class UniversityUpdateComponent implements OnInit {
 
  getUniversity:University;
  id=0;
  public university=
  {
    id:0,
    name:'',
    email:'',
    location:'',
    phone:'',
    imageUrl:'',
  };
  constructor(private universityService:UniversityService,private activeRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id=this.activeRoute.snapshot.params['id'];
    this.university.id=this.activeRoute.snapshot.params['id'];
    this.getUniversityByID();
   
  }

  getUniversityByID()
  {
      this.universityService.getUniversityById(this.id).subscribe(
        (data:any)=>
        {
          console.log(data)
          this.getUniversity=data
          this.university.name=data.name;
          this.university.email=data.email;
          this.university.location=data.location;
          this.university.phone=data.phone;
          console.log(this.getUniversity)

        }
      );
  }

  
 
  onSubmit(){
    this.universityService.updateUniversity(this.getUniversity).subscribe(
      (data:any)=>
      {
        console.log(data);
        this.gotToUniversitiesPage();
        Swal.fire('Successfully updated !!', 'University id : ' + data.id+" is updated.", 'success');
      }
    )
    console.log('onsubmit works')
  }

  public gotToUniversitiesPage()
  {
    this.router.navigate(['admin/university-list'])
  }
}
