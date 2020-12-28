import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PetService } from '../../services/pet/pet.service';
import { RequestService } from '../../services/request/request.service';
//import { PetSummary } from '../../../models/pet-summary';
import { PetWithRequests } from '../../../models/pet-with-requests';

import { InputRequest } from '../../../models/input-request';

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrls: ['./my-pets.component.css']
})
export class MyPetsComponent implements OnInit {

  //pets: PetSummary[];
  pets: PetWithRequests[];
  //requests: InputRequest[][];

  constructor(private petService: PetService,
              private requestService: RequestService) { }

  ngOnInit(): void {
  	this.getMyPets();
  }

  getMyPets(): void {
    this.petService.getMyPets()
    .subscribe(pets => {this.pets = pets;
                        this.loadRequests()});
  }

  loadRequests(): void {
    console.log('im here');
    for(let i = 0; i < this.pets.length; i++){
      console.log(this.pets[i].petId);
    }
    for(let i = 0; i < this.pets.length; i++){
      //this.requests[i] = 
      this.requestService.getRequestsByPetId(this.pets[i].petId)
                       .subscribe(pets => {this.pets[i].requests = pets;});
    }
    console.log('ddd ' + this.pets[0].requests[0])
    
    
    //console.log('Hello');
    //console.log("Pet ID  "+petId)
    //let requests: InputRequest[];
    //this.requestService.getRequestsByPetId(petId)
    //                   .subscribe(pets => requests = pets);
    //return requests;
  }
}
