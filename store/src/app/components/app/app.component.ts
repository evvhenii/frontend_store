import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn = false;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
  	if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      //this.roles = this.tokenStorage.getUser().roles;
    }
  }

  logOut(): void {
  	this.tokenStorage.signOut();
  	this.isLoggedIn = false;
  	this.reloadPage();
  }

  reloadPage(): void {
    window.location.reload();
  }
}
