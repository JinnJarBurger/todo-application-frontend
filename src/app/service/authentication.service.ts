import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BasicAuth} from "../model/basic-auth.model";
import {map} from "rxjs";
import {API_URL} from "../app.constants";

export const AUTHENTICATED_TOKEN = 'authenticatedToken';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  executeBasicAuthentication(username: string, password: string) {
    let basicAuthHeaderString = `Basic ${window.btoa(username + ":" + password)}`;

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    })

    return this.http.get<BasicAuth>(`${API_URL}/basicAuth`, {headers}).pipe(
      map(resp => {
        sessionStorage.setItem(AUTHENTICATED_USER, username);
        sessionStorage.setItem(AUTHENTICATED_TOKEN, basicAuthHeaderString);

        return resp;
      }),
    );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(AUTHENTICATED_TOKEN);
    }

    return null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);

    return !!user;
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(AUTHENTICATED_TOKEN);
  }
}
