import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { University } from '../pages/university/university';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  private apiServerUrl = baseUrl;

  constructor(private http: HttpClient) { }

  public getUniversities(): Observable<University[]> {
    return this.http.get<University[]>(`${this.apiServerUrl}/user/university/all`)
  }

  public getUniversityById(id: number): Observable<University> {
    return this.http.get<University>(`${baseUrl}/user/university/find/${id}`);
  }

  public addUniversity(university: University): Observable<University> {
    return this.http.post<University>(`${this.apiServerUrl}/user/university/add`, university)
  }

  public updateUniversity(university: University): Observable<University> {
    return this.http.put<University>(`${this.apiServerUrl}/user/university/update`, university)
  }

  public deleteUniversity(id: number): Observable<any> {
    return this.http.delete<any>(`${baseUrl}/user/university/delete/${id}`)
  }
}
