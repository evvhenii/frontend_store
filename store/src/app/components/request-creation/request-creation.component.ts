import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';

import { RequestService } from '../../services/request/request.service';
import { RequestCreation } from '../../../models/request-creation';
import { apiPath } from '../../../../globals';

@Component({
  selector: 'app-request-creation',
  templateUrl: './request-creation.component.html',
  styleUrls: ['./request-creation.component.css']
})
export class RequestCreationComponent implements OnInit {
  
  private subscription: Subscription;
  requestCreation: RequestCreation = {message: '', contactInfo:''};
  API: string = apiPath;
  isSuccessful = false;
  errorMessage = '';
  petId: number;
  isFailed = false;

  constructor(private requestService: RequestService,
  	          private activateRoute: ActivatedRoute) { 
  	this.subscription = activateRoute.params.subscribe(params=>this.petId=params['petId']);
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.requestService.create(this.requestCreation, this.petId).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isFailed = false;
      },
      err => {
      	this.isFailed = true;
        this.errorMessage = err.error.message;
      }
    );
  }

}
