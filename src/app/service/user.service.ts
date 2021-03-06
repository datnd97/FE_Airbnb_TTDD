import {Injectable} from '@angular/core';
import {User} from '../model/user/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Role} from '../model/user/role';
import {Password} from '../model/user/password';
import {Home} from '../model/home/Home';
import {UserForm} from '../user/component/profile-edit/UserForm';


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
      return true;
    }
    return false;
  }

  getRole() {
    return sessionStorage.getItem('role');
  }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(API_URL + '/users/roles');
  }

  changePassword(password: Password): Observable<any> {
    return this.http.post<any>(API_URL + '/users/change-password', password);
  }
  getUser(id: any): Observable<User> {
    return this.http.get<User>(API_URL + '/users/' + id);
  }
  updateUser(infor: UserForm): Observable<string> {
    return this.http.put<string>(API_URL + '/users/' + infor.id , infor);
  }
}

