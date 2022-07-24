import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../person';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public addUser(user:any){ 
    return this.http.post(`${baseUrl}/user/`,user);
  }

  public updateUser(id: number,user:any){
    console.log("inside user service")
    console.log(user);
    return this.http.put(`${baseUrl}/user/${id}`,user);
  }

  public getUserByEmail(email: string):Observable<Object>
  {
    return this.http.get(`${baseUrl}/user/${email}`);
  }

  public getUserById(id: number):Observable<Person>
  {
    return this.http.get<Person>(`${baseUrl}/user/${id}`); 
  }


  public deleteUserById(id: number):Observable<Person>
  {
    return this.http.delete<Person>(`${baseUrl}/user/${id}`);
  }

  getStudentsList():Observable<Person[]>
  {
    return this.http.get<Person[]>(`${baseUrl}/user/`)
  }

  public getUser()
  {
    let userStr=localStorage.getItem("user");
    if(userStr!=null)
    {
      return JSON.parse(userStr);
    }
  }

}
