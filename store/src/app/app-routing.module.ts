import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent} from './components/registration/registration.component';
import { LoginComponent} from './components/login/login.component';
import { AppComponent} from './components/app/app.component';
import { PetsComponent} from './components/pets/pets.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'pets', component: PetsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
