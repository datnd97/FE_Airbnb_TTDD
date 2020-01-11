import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';


const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(API_URL + '/api/auth/signup', user);
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(API_URL + '/api/auth/signin', user);
  }
  logOut() {
    window.localStorage.clear();
  }
}

