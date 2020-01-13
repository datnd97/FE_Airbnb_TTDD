import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserToken} from '../model/user-token';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  // private currentUserSubject: BehaviorSubject<UserToken>;
  // public currentUser: Observable<UserToken>;

  constructor(private http: HttpClient) {
    // this.currentUserSubject = new BehaviorSubject<UserToken>(JSON.parse(localStorage.getItem('currentUser')));
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  login(username: string, password: string) {
    return this.http.post<any>(API_URL + '/users/login', {username, password})
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        console.log(user);
        sessionStorage.setItem('token', user.token);
        sessionStorage.setItem('role', user.role);
        // this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    sessionStorage.removeItem('currentUser');
    // this.currentUserSubject.next(null);
  }
}
