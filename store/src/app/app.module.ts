import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './components/app/app.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { PetsComponent } from './components/pets/pets.component';
import { PetCreationComponent } from './components/pet-creation/pet-creation.component';
import { MyPetsComponent } from './components/my-pets/my-pets.component';
import { RequestedPetsComponent } from './components/requested-pets/requested-pets.component';
import { PetProfileComponent } from './components/pet-profile/pet-profile.component';
import { RequestCreationComponent } from './components/request-creation/request-creation.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    AppComponent,
    PetsComponent,
    PetCreationComponent,
    MyPetsComponent,
    RequestedPetsComponent,
    PetProfileComponent,
    RequestCreationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
