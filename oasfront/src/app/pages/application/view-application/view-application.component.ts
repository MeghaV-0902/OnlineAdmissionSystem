import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationServiceService } from 'src/app/services/application-service.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { Application } from '../application';

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.css']
})
export class ViewApplicationComponent implements OnInit {
  application: Application[];
  app: Application = new Application();
  app2: Application;
  currentUser = null;
  constructor(private applicationService: ApplicationServiceService, private router: Router, private user: LoginService) { }

  ngOnInit(): void {
    this.user.getCurrentUser().subscribe(
      (user: any) => {
        this.currentUser = user;
      },
      (error) => {
        alert("error");
      }
    )
    this.getApplications();
  }

  private getApplications() {
    this.applicationService.getApplications().subscribe(data => {
      this.application = data;
      console.log(this.application);
    })
  }

}
