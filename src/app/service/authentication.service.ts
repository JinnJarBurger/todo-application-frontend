import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
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

    return !!user;
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
