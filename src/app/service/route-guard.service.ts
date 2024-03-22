import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
class RouteGuard {

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authenticationService.isUserLoggedIn()) {
      return true;
    }

    this.router.navigate(['login'])

    return false;
  }
}

export const RouteGuardService: CanActivateFn = (router: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(RouteGuard).canActivate(router, state);
}
