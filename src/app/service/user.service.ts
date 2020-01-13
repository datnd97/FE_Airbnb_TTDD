import {Injectable} from '@angular/core';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Role} from '../model/role';
import {Password} from '../model/password';


const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(API_URL + '/users/register', user);
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(API_URL + '/users/login', user);
  }

  logOut() {
    localStorage.clear();
    sessionStorage.clear();
  }

  isLogin() {
    if (sessionStorage.getItem('token') !== null) {
      console.log('isLogin');
      return true;
    }
    console.log('Not Islogin');
    return false;
  }

  getRole() {
    console.log('role' + sessionStorage.getItem('role'));
    return sessionStorage.getItem('role');
  }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(API_URL + '/users/roles');
  }

  changePassword(password: Password): Observable<Password> {
    return this.http.post<Password>(API_URL + '/users/change-password', password);
  }
}

