// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>('/api/auth/login', { username, password });
  }

  register(username: string, password: string, email?: string): Observable<any> {
    return this.http.post<any>('/api/auth/register', { username, password, email });
  }
}
