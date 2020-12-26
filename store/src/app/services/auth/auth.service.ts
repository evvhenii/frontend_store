import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserRegistration } from '../../../models/user-registration';
import { apiPath } from '../../../../globals';

const API = apiPath;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(API + 'auth/', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<UserRegistration> {
    console.log(user);
    return this.http.post<UserRegistration>(API + 'register/', user, httpOptions);
  }
}
