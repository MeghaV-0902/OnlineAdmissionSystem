import { getLocaleCurrencySymbol } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationServiceService } from 'src/app/services/application-service.service';
import Swal from 'sweetalert2';
import { Application } from '../application';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
  application:Application[];


   app:Application= new Application();
   app2:Application;

  constructor(private applicationService:ApplicationServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getApplications();
    
  }

  private getApplications() {
    this.applicationService.getApplications().subscribe(data =>{
      this.application=data;
      console.log(this.application);
    })
  }
  acceptApplication(id:number)
  {
    this.getApplicationAccept(id)
    console.log(this.app)
  }

  getApplicationAccept(id:number):void
  {
    this.applicationService.getApplicationsById(id).subscribe(
      data=>
      {
        console.log(data)
        this.app=data;
        this.updateAccept()
      }
    )
  }
  getApplicationReject(id:number):void
  {
    this.applicationService.getApplicationsById(id).subscribe(
      data=>
      {
        console.log(data)
        this.app=data;
        this.updateReject()
      }
    )
  }
  updateAccept()
  {
    this.app.status="ACCEPTED";
    console.log(this.app);
    this.applicationService.updateApplication(this.app).subscribe(
      (data:any)=>
      {
        console.log("success")
        this.goToApplicationPage();
        Swal.fire('Accepted', 'Applicantion id : ' + data.id, 'success');
        setTimeout(function(){
          window.location.reload();
       }, 500);
      }
    )
 
  }
  rejectApplication(id:number)
  {
    this.getApplicationReject(id)
  }

  updateReject()
  {
    this.app.status="REJECTED";
    console.log(this.app);
    this.applicationService.updateApplication(this.app).subscribe(
      (data:any)=>
      {
        console.log("REJECT")
        this.goToApplicationPage();
        Swal.fire('REJECTED', 'Applicantion id : ' + data.id, 'success');
        setTimeout(function(){
          window.location.reload();
       }, 500);
      }
    )

  }
  goToApplicationPage()
  {
    this.router.navigate(['admin/application-list'])
  }

}
