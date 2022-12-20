import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  loginHandler(userCredential: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(userCredential);
    return this.http.post<any>(`${environment.apiUrl}/user/login`, body, {
      headers: headers,
    });
  }

  registerHandler(newUser: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(newUser);
    return this.http.post<any>(`${environment.apiUrl}/user/register`, body, {
      headers: headers,
    });
  }

  getUser() {
    const response = localStorage.getItem('user');
    const userData = JSON.parse(response!);

    return userData;
  }

  deleteUserFromLS() {
    localStorage.removeItem('user');
  }
}
