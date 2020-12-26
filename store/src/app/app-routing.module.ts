import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent} from './components/registration/registration.component';
import { LoginComponent} from './components/login/login.component';
import { AppComponent} from './components/app/app.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //declarations: [ AppComponent, RegistrationComponent],
  exports: [RouterModule],
  //bootstrap: [AppComponent]
})
export class AppRoutingModule { }
