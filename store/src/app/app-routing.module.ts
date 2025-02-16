import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent} from './components/registration/registration.component';
import { LoginComponent} from './components/login/login.component';
import { AppComponent} from './components/app/app.component';
import { PetsComponent} from './components/pets/pets.component';
import { PetProfileComponent} from './components/pet-profile/pet-profile.component';
import { MyPetsComponent} from './components/my-pets/my-pets.component';
import { MyProfileComponent} from './components/my-profile/my-profile.component';
import { RequestCreationComponent} from './components/request-creation/request-creation.component';
import { RequestedPetsComponent} from './components/requested-pets/requested-pets.component';
import { PetCreationComponent} from './components/pet-creation/pet-creation.component';
import { AuthGuard } from './guards/login-activate.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'pets/:petId', component: PetProfileComponent },
  { path: 'pets/:petId/new_request', component: RequestCreationComponent, canActivate: [AuthGuard] },
  { path: 'my_pets', component: MyPetsComponent, canActivate: [AuthGuard] },
  { path: 'my_profile', component: MyProfileComponent, canActivate: [AuthGuard] },
  { path: 'requested_pets', component: RequestedPetsComponent, canActivate: [AuthGuard] },
  { path: 'add_pet', component: PetCreationComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
