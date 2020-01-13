import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const currentUser = this.authenticationService.currentUserValue;
    if (sessionStorage.getItem('token')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ` + sessionStorage.getItem('token')
        }
      });
    }

    return next.handle(request);
  }
}
