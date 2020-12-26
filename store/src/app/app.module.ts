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

//import { authInterceptorProviders } from './_helpers/auth.interceptor';

@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    AppComponent,
    PetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  //providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
