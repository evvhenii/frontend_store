import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegistration } from '../../../models/user-registration';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  /*register(user: UserRegistration) {
    return this.http.post(`/users/register`, user);
  }*/
}
