import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from '../../environments/environment';
import {Home} from '../models/Home';
import {Status} from '../models/Status';
// import {realpath} from 'fs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private HomeUrl = environment.homeUrl;

  constructor(private http: HttpClient) {}
  getListHome(): Observable<Home[]> {
    return this.http.get<Home[]>(this.HomeUrl);
  }
  addHome(home: Home): Observable<Home> {
    return this.http.post<Home>(this.HomeUrl, home);
  }
  deleteHome(id: number): Observable<void> {
    return this.http.delete<void>(this.HomeUrl + id);
  }
  updateHome(home: Home, id): Observable<Home> {
    return this.http.put<Home>(this.HomeUrl + home.id, home);
  }
  getHome(id: number): Observable<Home> {
    return this.http.get<Home>(this.HomeUrl + id);
  }
  updateStatusHome(status: Status, id): Observable<Status> {
    return this.http.put<Status>(this.HomeUrl + id + '/status', status);
  }
}
