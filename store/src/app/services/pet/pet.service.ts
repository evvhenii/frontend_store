import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Pet } from '../../../models/pet';
import { apiPath } from '../../../../globals';
import { PetCreation } from '../../../models/pet-creation';


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

  public getMyPets(): Observable<Pet[]>{
  	return this.http.get<Pet[]>(apiPath + "my_pets");
  }

  public getRequestedPets(): Observable<Pet[]>{
  	return this.http.get<Pet[]>(apiPath + "requested_pets");
  }

  public create(pet): Observable<PetCreation> {
    console.log(pet);
    return this.http.post<PetCreation>(this.API, pet, httpOptions);
  }
}
