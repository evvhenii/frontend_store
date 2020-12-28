import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Pet } from '../../../models/pet';
import { PetSummary } from '../../../models/pet-summary';
import { PetWithRequests } from '../../../models/pet-with-requests';
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

  public getPets(): Observable<PetSummary[]>{
  	return this.http.get<PetSummary[]>(this.API+"/findAll");
  }

  /*public getMyPets(): Observable<PetSummary[]>{
  	return this.http.get<PetSummary[]>(apiPath + "my_pets");
  }*/

  public getMyPets(): Observable<PetWithRequests[]>{
    return this.http.get<PetWithRequests[]>(apiPath + "my_pets");
  }

  public deletePet(petId: number){
  	return this.http.delete(this.API + '/' + petId);
  }

  public getPetById(petId: number): Observable<Pet>{
  	return this.http.get<Pet>(this.API + '/' + petId);
  }

  public getRequestedPets(): Observable<PetSummary[]>{
  	return this.http.get<PetSummary[]>(apiPath + "requested_pets");
  }
 
  public create(pet): Observable<PetCreation> {
    //console.log(pet);
    return this.http.post<PetCreation>(this.API, pet, httpOptions);
  }
}
