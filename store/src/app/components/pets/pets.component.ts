import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet/pet.service';
import { PetSummary } from '../../../models/pet-summary';


@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  
  pets: PetSummary[];

  constructor(private petService: PetService) { }
  
  ngOnInit(): void {
  	this.getPets();
  }

  getPets(): void {
    this.petService.getPets()
    .subscribe(pets => this.pets = pets);
  }
}
