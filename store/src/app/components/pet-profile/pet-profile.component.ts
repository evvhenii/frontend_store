import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import {Subscription} from 'rxjs';

import { Pet } from '../../../models/pet';
import { PetService } from '../../services/pet/pet.service';
import { TokenStorageService } from '../../services/token-storage/token-storage.service';


@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.css']
})
export class PetProfileComponent implements OnInit {

  userId: number;
  petId: number;
  //showDeleteButton: boolean = false;
  pet: Pet = {petId: 0,
  	          userId: 0,
  	          daysAfterAdding: 0,
  	          name: '', 
              category: '', 
              gender: '', 
              description: '', 
              imageUrl: ''};
  private subscription: Subscription;

  constructor(private petService: PetService,
  	          private tokenStorageService: TokenStorageService,
  	          private activateRoute: ActivatedRoute,
  	          private router: Router) { 
    this.subscription = activateRoute.params.subscribe(params=>this.petId=params['petId'])
  }
  
  ngOnInit(): void {
  	this.getPetById(this.petId);
  	this.userId = this.tokenStorageService.getUserIdFromToken();
  }

  public deletePet():void{
  	console.log('hello');
    this.petService.deletePet(this.petId).subscribe(() => this.redirectToMyPets());
  }

  redirectToCreateRequest(): void{
    this.router.navigate(['/create_request']);
  }

  redirectToMyPets(): void{
  	this.router.navigate(['/my_pets']);
  }

  getPetById(petId: number): void {
    this.petService.getPetById(petId)
    .subscribe(pet => this.pet = pet);
  }
}
