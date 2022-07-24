import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniversityService } from 'src/app/services/university.service';
import { University } from '../university';

@Component({
  selector: 'app-university-add',
  templateUrl: './university-add.component.html',
  styleUrls: ['./university-add.component.css']
})
export class UniversityAddComponent implements OnInit {


  university:University=new University();

  constructor(private universityService:UniversityService,private router: Router) { }
  

  ngOnInit(): void {
  }
  
  saveUniversity(){
    this.universityService.addUniversity(this.university).subscribe(data=>{
      console.log(data);
      this.goToUniversities();
    },
    error=>console.log(error));
  }

  goToUniversities(){
    this.router.navigate(['admin/university-list'])
  }

  onSubmit(){
    console.log(this.university);
    this.saveUniversity();
    alert("University Added Successfully.");
  }

  validateForm() {
    console.log('inside validateform function')
    let x=document.forms["universityform"]["name"].value;
    let y=document.forms["universityform"]["email"].value;
    let z=document.forms["universityform"]["location"].value;
    let v=document.forms["universityform"]["phone"].value;
    if(x==''|| y==''|| z=='' || v==''){
      alert('Field cannot be empty');
      //return false;
    }
    else{
    this.saveUniversity();
    alert("University Added Successfully.");
    }
        
  }

}
