import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private http:HttpClient) { }

  public getCurrentUser()
  {
    return this.http.get(`${baseUrl}/current-user`);
  }

  //generate token
  public generateToken(loginData)
  {
    return this.http.post(`${baseUrl}/generate-token`,loginData);
  }

  //login user: set token in local storage
  public loginUser(token)
  {
    localStorage.setItem("token",token);
    return true;
  }

  //is user logged in or not
  public isLoggedIn()
  {
    let tokenStr=localStorage.getItem("token")
    if(tokenStr==undefined|| tokenStr==''||tokenStr==null)
    {
      return false
    }
    else{
      return true;
    }
  }
  //logout remove from local storage

  public logout()
  {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }

  //gettoken to get token
  public getToken()
  {
    return localStorage.getItem("token");
  }
  //set user detail
  public setUser(user)
  {
    localStorage.setItem("user",JSON.stringify(user));
  }
  public getUser()
  {
    let userStr=localStorage.getItem("user");
    if(userStr!=null)
    {
      return JSON.parse(userStr);
    } 
    else{
      this.logout();
      return null;
    }
  }
  //get user role
  public getUserRole()
  {
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}
