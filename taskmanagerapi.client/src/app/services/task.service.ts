import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://localhost:5001/api/tasks';  // Replace with your backend URL

  constructor(private http: HttpClient) { }

  // Updated getTasks method to accept a token
  getTasks(token: string): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(this.apiUrl, { headers });
  }

  createTask(task: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, task);
  }
}
