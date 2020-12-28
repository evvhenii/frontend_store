import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Pet } from '../../../models/pet';
import { PetPictureRequest } from '../../../models/pet-picture-request';
import { PetService } from '../../services/pet/pet.service';
import { ImageService } from '../../services/image/image.service';
import { TokenStorageService } from '../../services/token-storage/token-storage.service';

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.css']
})
export class PetProfileComponent implements OnInit {
  petPictureRequest: PetPictureRequest = {url:'', petId:null};
  userId: number;
  petId: number;
  isDataLoaded = false;
  showLoadNewPicture = false;
  isSuccessful = false;
  errorMessage = '';
  isFailed = false;
  private subscription: Subscription;
  pet: Pet = {petId: 0,
  	          userId: 0,
  	          daysAfterAdding: 0,
  	          name: '', 
              category: '', 
              gender: '', 
              description: '', 
              imageUrl: ''};

  constructor(private petService: PetService,
              private imageService: ImageService,
  	          private tokenStorageService: TokenStorageService,
  	          private activateRoute: ActivatedRoute,
  	          private router: Router) { 
    this.subscription = activateRoute.params.subscribe(params=>this.petId=params['petId'])
  }
  
  ngOnInit(): void {
  	this.getPetById(this.petId);
  	this.userId = this.tokenStorageService.getUserIdFromToken();
  }

  showLoadNewPictureBlock(): void{
    this.showLoadNewPicture = true;
    this.isSuccessful = false;
    this.isFailed = false;
    this.petPictureRequest.url = '';
  }

  public deletePet():void{
    this.petService.deletePet(this.petId).subscribe(() => this.redirectToMyPets());
  }

  redirectToCreateRequest(): void{
    this.router.navigate(['pets/' + this.pet.petId + '/new_request']);
  }

  redirectToMyPets(): void{
  	this.router.navigate(['/my_pets']);
  }

  getPetById(petId: number): void {
    this.petService.getPetById(petId)
    .subscribe(pet => {this.pet = pet;
                       this.isDataLoaded = true;
                       console.log(this.isDataLoaded)});
  }

  onSubmit(): void {
    this.petPictureRequest.petId = this.petId;
    let data = [];
    data[0] = this.petPictureRequest;
    this.imageService.create(data).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isFailed = true;
      }
    );
  }
}
