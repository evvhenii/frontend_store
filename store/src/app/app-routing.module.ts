import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent} from './components/registration/registration.component';
import { LoginComponent} from './components/login/login.component';
import { AppComponent} from './components/app/app.component';
import { PetsComponent} from './components/pets/pets.component';
import { MyPetsComponent} from './components/my-pets/my-pets.component';
import { RequestedPetsComponent} from './components/requested-pets/requested-pets.component';
import { PetCreationComponent} from './components/pet-creation/pet-creation.component';
import { AuthGuard } from './guards/login-activate.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'my_pets', component: MyPetsComponent, canActivate: [AuthGuard] },
  { path: 'requested_pets', component: RequestedPetsComponent, canActivate: [AuthGuard] },
  { path: 'add_pet', component: PetCreationComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
