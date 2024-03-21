import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() {
  }

  authenticate(username: string, password: string) {
    if (username.startsWith('a') && !!password.trim()) {
      sessionStorage.setItem('authenticatedUser', username);

      return true;
    }

    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');

    return user !== null;
  }
}
