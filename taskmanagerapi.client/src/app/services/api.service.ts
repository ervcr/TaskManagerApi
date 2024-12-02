import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://localhost:44396/api';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, { username, password })
      .pipe(map(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
        }
        return response;
      }));
  }

  register(username: string, password: string, email: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/register`, { username, password, email });
  }

  getTasks(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/tasks`, this.getHeaders());
  }

  createTask(task: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/tasks`, task, this.getHeaders());
  }

  updateTask(id: number, task: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/tasks/${id}`, task, this.getHeaders());
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/tasks/${id}`, this.getHeaders());
  }

  private getHeaders() {
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
  }
}