import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Pet } from '../../../models/pet';
import { apiPath } from '../../../../globals';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PetService {
  
  API: string = apiPath + 'pets';

  constructor(private http: HttpClient) { }

  public getPets(): Observable<Pet[]>{
  	return this.http.get<Pet[]>(this.API+"/findAll");
  }
}
