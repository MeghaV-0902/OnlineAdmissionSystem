import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Person } from '../person';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id: number;
  public getuser: Person
  public user = {
    userId: 0,
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    aadharCardNo: '',
  };
  constructor(private userService: UserService, private snack: MatSnackBar, private activeRoute: ActivatedRoute, private router: Router, private login: LoginService) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.user.userId = this.activeRoute.snapshot.params['id'];
    this.getUserByID();
    //this.user.firstName=this.getuser.firstName;
  }

  getUserByID() {
    this.userService.getUserById(this.id).subscribe(
      (data: any) => {
        this.getuser = data;
        this.user.firstName = data.firstName
        this.user.middleName = data.middleName
        this.user.lastName = data.lastName
        this.user.email = data.email
        this.user.mobileNumber = data.mobileNumber
        this.user.aadharCardNo = data.aadharCardNo
        console.log("user " + this.user)
        console.log(data)
        console.log(this.getuser)
      }
    );
  }

  formSubmit1() {
    this.userService.updateUser(this.user.userId, this.user).subscribe(
      (data: any) => {
        //success
        console.log(data);
        this.goToProfilePage();
        //alert('success updated');
        Swal.fire('Successfully updated !!', 'User id : ' + data.userId + " is updated.", 'success');
      },
      (error) => {
        //error
        console.log(error);
        // alert('something went wrong');
        this.snack.open(error.error.text, '', {
          duration: 3000,
        });
      }
    );
  }

  goToProfilePage() {
    this.router.navigate(['/admin/view-students'])

  }

}
