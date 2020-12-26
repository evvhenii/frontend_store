import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet/pet.service';
import { Pet } from '../../../models/pet';


@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  
  pets: Pet[];

  constructor(private petService: PetService) { }
  
  ngOnInit(): void {
  	this.getPets();
  }

  getPets(): void {
    this.petService.getPets()
    .subscribe(pets => this.pets = pets);
  }

}
