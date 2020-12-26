import { Component, OnInit } from '@angular/core';

import { PetService } from '../../services/pet/pet.service';
import { Pet } from '../../../models/pet';

@Component({
  selector: 'app-requested-pets',
  templateUrl: './requested-pets.component.html',
  styleUrls: ['./requested-pets.component.css']
})
export class RequestedPetsComponent implements OnInit {

  pets: Pet[];

  constructor(private petService: PetService) { }

  ngOnInit(): void {
  	this.getRequestedPets();
  }

  getRequestedPets(): void {
    this.petService.getRequestedPets()
    .subscribe(pets => this.pets = pets);
  }

}
