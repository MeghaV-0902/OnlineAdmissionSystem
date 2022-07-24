import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/person';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {

  forAuthority=null
  auth=[];
  users: Person[];
  constructor(private userService: UserService, private login: LoginService,private router: Router) { }

  ngOnInit(): void {
    this.getStudents();
    //console.log("user: "+this.users[0].firstName+" "+this.users[0].lastName+" "+this.users[0].middleName+" "+this.users[0].email+" ")



  } 

  getStudents()
  {
    this.userService.getStudentsList().subscribe(
      data=>
      {
        this.forAuthority=data;
        this.users=data;
      }
    );
  }

  updateStudent(id:number)
  {
    this.router.navigate(['admin/update-student',id])
  }

  deleteStudent(id:number)
  {
    this.userService.deleteUserById(id).subscribe(
      (data)=>{
        Swal.fire('Successfully deleted !!', 'User id : ' + id, 'success');
        setTimeout(function(){
          window.location.reload();
       }, 2000);
      }
    
    )
  }

}
