import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from '../services/helper';
import { UniversityCourse } from './university-course';

@Injectable({
  providedIn: 'root'
})
export class UniversityCourseServiceService {
  private apiServerUrl = baseUrl;

  constructor(private http: HttpClient) { }

  public getUniversityCourses(): Observable<UniversityCourse[]> {
    return this.http.get<UniversityCourse[]>(`${this.apiServerUrl}/UniversityCourse/all`)
  }

  public addUniversityCourse(universityCourse: UniversityCourse): Observable<UniversityCourse> {
    return this.http.post<UniversityCourse>(`${this.apiServerUrl}/UniversityCourse/add`, universityCourse)
  }

  public deleteUniversityCourse(id: number): Observable<UniversityCourse> {
    return this.http.delete<UniversityCourse>(`${baseUrl}/UniversityCourse/delete/${id}`)
  }
}
