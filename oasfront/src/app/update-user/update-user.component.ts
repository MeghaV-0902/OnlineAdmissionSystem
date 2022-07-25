import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  public getuser = null
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
    this.user.userId = this.activeRoute.snapshot.params['id'];
    this.getuser = this.userService.getUser();
    this.user.firstName = this.getuser.firstName;
    this.user.middleName = this.getuser.middleName;
    this.user.lastName = this.getuser.lastName;
    this.user.email = this.getuser.email;
    this.user.mobileNumber = this.getuser.mobileNumber;
    this.user.aadharCardNo = this.getuser.aadharCardNo;

    // console.log("user: "+this.user.firstName+" "+this.user.lastName+" "+this.user.middleName+" "+this.user.email+" ")
    // console.log("getuser: "+this.getuser.firstName+" "+this.getuser.lastName+" "+this.getuser.middleName+" "+this.getuser.email+" ")
  }

  formSubmit() {
    this.userService.updateUser(this.user.userId, this.user).subscribe(
      (data: any) => {
        //success
        console.log(data);
        this.login.setUser(data);
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
    if (this.login.getUserRole() == "ADMIN") {
      this.router.navigate(['/admin/profile'])
    }
    else if (this.login.getUserRole() == "STUDENT") {
      this.router.navigate(['/user-dashboard/profile'])
    }

  }

}
