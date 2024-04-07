import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from "@angular/core";
import {AuthenticationService} from "../service/authentication.service";

export const httpBasicAuthInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthenticationService);
  let basicAuthHeaderString = authService.getAuthenticatedToken();
  let username = authService.getAuthenticatedUser();

  if (basicAuthHeaderString && username) {
    req = req.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    });
  }

  return next(req);
};
