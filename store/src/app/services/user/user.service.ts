import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MyProfile } from '../../../models/my-profile';
import { UserProfile } from '../../../models/user-profile';
import { apiPath } from '../../../../globals';

const API = apiPath;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API: string = apiPath + 'profile/';

  constructor(private http: HttpClient) { }

  public getMyProfile(): Observable<MyProfile>{
  	return this.http.get<MyProfile>(this.API);
  }

  public getProfileById(id: number): Observable<UserProfile>{
  	return this.http.get<UserProfile>(this.API + id);
  }

  
}
