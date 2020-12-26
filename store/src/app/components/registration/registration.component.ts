import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { TokenStorageService } from '../../services/token-storage/token-storage.service';
import { UserRegistration } from '../../../models/user-registration';
import { apiPath } from '../../../../globals';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: UserRegistration = {name: '', 
                            surname: '', 
                            email: '', 
                            gender: "s", 
                            password: "", 
                            imageUrl: "",
                            birthDate: null };
  API: string = apiPath;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,
  	          private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.register(this.user).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.tokenStorage.signOut();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
