import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { apiPath } from '../../../../globals';
import { PetPictureRequest } from '../../../models/pet-picture-request';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ImageService {
    
  API: string = apiPath + 'pet_pictures';

  constructor(private http: HttpClient) { }

  public create(petPicture): Observable<PetPictureRequest[]> {
    //console.log(pet);
    return this.http.post<PetPictureRequest[]>(this.API, petPicture, httpOptions);
  }
}
