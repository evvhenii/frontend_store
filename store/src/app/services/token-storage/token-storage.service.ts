import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  //private currentUserSubject: BehaviorSubject<User>;
  //public currentUser: Observable<User>;
  private helper = new JwtHelperService();

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    console.log("save token " + token);
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    console.log("get token " + sessionStorage.getItem(TOKEN_KEY));
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUserIdFromToken(): any {
    return this.helper.decodeToken(sessionStorage.getItem(USER_KEY)).sub;
  }

  isLoggedIn() {
    if (this.getToken() == null) {
      return false;
    } else {
      return true;
    }
  }
}