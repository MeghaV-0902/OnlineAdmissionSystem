import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CollegeCourse } from '../pages/college-course/college-course';

import baseUrl from './helper';

@Injectable({  
  providedIn: 'root' 
})
export class CollegeCourseService {

  private apiServerUrl=baseUrl;

  constructor(private http:HttpClient) { }

  // public addCollegeCourse(collegecourse:CourseAdd): Observable<CourseAdd>{
  //   return this.http.post<CourseAdd>(`${this.apiServerUrl}/CollegeCourse/add`,collegecourse)
  // }

  public getCollegeCourses(): Observable<CollegeCourse[]>{
    return this.http.get<CollegeCourse[]>(`${this.apiServerUrl}/CollegeCourse/all`)
  }

  public addCollegeCourse(collegecourse:CollegeCourse): Observable<CollegeCourse>{
    return this.http.post<CollegeCourse>(`${this.apiServerUrl}/CollegeCourse/add`,collegecourse)
  }

  public deleteCollegeCourse(id:number): Observable<CollegeCourse>{
    return this.http.delete<CollegeCourse>(`${baseUrl}/CollegeCourse/delete/${id}`)
  }
} 
