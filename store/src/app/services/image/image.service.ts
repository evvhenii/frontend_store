import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { apiPath } from '../../../../globals';
import { PetPictureRequest } from '../../../models/pet-picture-request';
import { PetPictureResponse } from '../../../models/pet-picture-response';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ImageService {
    
  API: string = apiPath;

  constructor(private http: HttpClient) { }

  public create(petPicture): Observable<PetPictureRequest[]> {
    return this.http.post<PetPictureRequest[]>(this.API + 'pet_pictures', petPicture, httpOptions);
  }

  public getPictureById(petId: number): Observable<PetPictureResponse[]>{
  	return this.http.get<PetPictureResponse[]>(this.API + 'pet/' + petId + '/pet_pictures');
  }
}
