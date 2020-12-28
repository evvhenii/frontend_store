import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { apiPath } from '../../../../globals';
import { InputRequest } from '../../../models/input-request';
import { RequestCreation } from '../../../models/request-creation';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  API: string = apiPath + 'pets/';

  constructor(private http: HttpClient) { }

  public create(request: RequestCreation, petId: number): Observable<RequestCreation> {
    //console.log(pet);
    return this.http.post<RequestCreation>(this.API + petId + '/new_request', request, httpOptions);
  }

  public getRequestsByPetId(petId: number): Observable<InputRequest[]>{
  	return this.http.get<InputRequest[]>(this.API + petId + '/requests');
  }
}
