import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService, private snack: MatSnackBar) {}
 
  public user = {
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    aadharCardNo: '',
    password: '',
  };

  ngOnInit(): void {}

  formSubmit(){
    // alert('Submit');

    console.log(this.user);
    if(this.user.firstName == '' || this.user.firstName == null){
      // alert("Firstname is Required!");
      this.snack.open("Firstname is Required!",'',{
        duration:3000,
      });
      return;
    }
    if(this.user.middleName == '' || this.user.middleName == null){
      // alert("middleName is Required!");
      this.snack.open("Middle Name is Required!",'',{
        duration:3000,
      });
      return;
    }
    if(this.user.lastName == '' || this.user.lastName == null){
      // alert("lastName is Required!");
      this.snack.open("Last Name is Required!",'',{
        duration:3000,
      });
      return;
    }
    if(this.user.email == '' || this.user.email == null){
      // alert("email is Required!");
      this.snack.open("Email Name is Required!",'',{
        duration:3000,
      });
      return;
    }
    if(this.user.mobileNumber == '' || this.user.mobileNumber == null){
      // alert("mobileNumber is Required!");
      this.snack.open("Mobile Number is Required!",'',{
        duration:3000,
      });
      return;
    }
    if(this.user.aadharCardNo == '' || this.user.aadharCardNo == null){
      // alert("aadharCardNo is Required!");
      this.snack.open("Aadhar Card Number is Required!",'',{
        duration:3000,
      });
      return;
    }
    //validate

    //addUser: userservice
    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        //success
        console.log(data);
        //alert('success');
        Swal.fire('Successfully done !!', 'User id is ' + data.userId, 'success');
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

  //this.user
}
