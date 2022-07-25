import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Person } from 'src/app/person';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = null;

  constructor(private login: LoginService, private router: Router) { }

  ngOnInit(): void {


    //this.user=this.login.getUser();
    this.login.getCurrentUser().subscribe(
      (user: any) => {
        this.user = user;
      },
      (error) => {
        alert("error");
      }
    )
  }
  updateUser(id: number) {
    this.router.navigate(['admin/update-user', id])//admin here
  }

  updateStudent(id: number) {
    this.router.navigate(['user-dashboard/update-user', id])//admin here
  }



}
