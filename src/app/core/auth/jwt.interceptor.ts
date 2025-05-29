import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    // add auth header with jwt if user is logged in and request is to the api url
    if (
      this.authenticationService.isLoggedIn() &&
      request.url.startsWith(environment.apiUrl)
    ) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authenticationService.getJwtToken()}`,
        },
      });
    }
    return next.handle(request);
  }
}
