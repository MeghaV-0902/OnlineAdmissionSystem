import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from '../pages/application/application';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ApplicationServiceService {

  private apiServerUrl = baseUrl;

  constructor(private http: HttpClient) { }

  public getApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.apiServerUrl}/application/all`)
  }

  public getApplicationsById(id: number): Observable<Application> {
    return this.http.get<Application>(`${this.apiServerUrl}/application/find/${id}`)
  }

  public addApplication(application: Application): Observable<Application> {
    return this.http.post<Application>(`${this.apiServerUrl}/application/add`, application)
  }

  public updateApplication(application: Application): Observable<Application> {
    return this.http.put<Application>(`${this.apiServerUrl}/application/update`, application)
  }
} 
