import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CollegeService } from 'src/app/services/college.service';
import { UniversityService } from 'src/app/services/university.service';
import { University } from '../../university/university';
import { College } from '../college';

@Component({
  selector: 'app-college-add',
  templateUrl: './college-add.component.html',
  styleUrls: ['./college-add.component.css']
})
export class CollegeAddComponent implements OnInit {

  
  college:College=new College();
  universities:University[];

  @ViewChild('unis') unis!:ElementRef;
  selectedUniversity='';
  

  constructor(private collegeService:CollegeService,private router: Router,private universityService:UniversityService) { }

  ngOnInit(): void {
  }

  saveCollege(){
    this.college.university=this.selectedUniversity;
    this.collegeService.addCollege(this.college).subscribe(data=>{
      console.log(data);
      this.goToColleges();
    },
    error=>console.log(error));
  }

  goToColleges(){
    this.router.navigate(['admin/college-list'])
  }

  onSubmit(){
    console.log(this.college);
    this.saveCollege();
    alert("University Added Successfully.");
  }

  // private getUniversities() {
  //   this.universityService.getUniversities().subscribe(data =>{
  //     this.universities=data;
  //   })
  // }

  onSelected(): void{
    this.selectedUniversity=this.unis.nativeElement.value;
  }

  validateForm() {
    console.log('inside validateform function')
    let x=document.forms["collegeform"]["name"].value;
    let y=document.forms["collegeform"]["email"].value;
    let z=document.forms["collegeform"]["location"].value;
    let v=document.forms["collegeform"]["phone"].value;
    if(x==''|| y==''|| z=='' || v==''){
      alert('Field cannot be empty');
      //return false;
    }
    else{
    this.saveCollege();
    alert("College Added Successfully.");
    }
        
  }


}
