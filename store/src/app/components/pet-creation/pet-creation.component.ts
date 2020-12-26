import { Component, OnInit } from '@angular/core';

import { PetService } from '../../services/pet/pet.service';
import { PetCreation } from '../../../models/pet-creation';
import { apiPath } from '../../../../globals';

@Component({
  selector: 'app-pet-creation',
  templateUrl: './pet-creation.component.html',
  styleUrls: ['./pet-creation.component.css']
})
export class PetCreationComponent implements OnInit {

  petCreation: PetCreation = {name: '', 
                      category: '', 
                      gender: '', 
                      description: '', 
                      imageUrl: ''};
  API: string = apiPath;
  isSuccessful = false;
  errorMessage = '';

  constructor(private petService: PetService) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.petService.create(this.petCreation).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }

}
