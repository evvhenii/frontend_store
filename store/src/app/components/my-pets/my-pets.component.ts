import { Component, OnInit } from '@angular/core';

import { PetService } from '../../services/pet/pet.service';
import { Pet } from '../../../models/pet';

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrls: ['./my-pets.component.css']
})
export class MyPetsComponent implements OnInit {

  pets: Pet[];

  constructor(private petService: PetService) { }

  ngOnInit(): void {
  	this.getMyPets();
  }

  getMyPets(): void {
    this.petService.getMyPets()
    .subscribe(pets => this.pets = pets);
  }
}
