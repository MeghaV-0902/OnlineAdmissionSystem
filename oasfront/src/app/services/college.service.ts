import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { College } from '../pages/college/college';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
}) 
export class CollegeService {
  
  private apiServerUrlc=baseUrl;

  constructor(private http:HttpClient) { }

  public getColleges(): Observable<College[]>{
    return this.http.get<College[]>(`${baseUrl}/user/college/all`); 
  }

  public getCollegeById(id: number):Observable<College>
  {
    return this.http.get<College>(`${baseUrl}/user/college/find/${id}`); 
  }

  public addCollege(college: College): Observable<College>{
    return this.http.post<College>(`${this.apiServerUrlc}/user/college/add`,college);
  }
  public updateCollege(college:College): Observable<College>{
    return this.http.put<College>(`${this.apiServerUrlc}/user/college/update`,college);
  }
  public deleteCollege(id:number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrlc}/user/college/delete/${id}`);
  }
}
