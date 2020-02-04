import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Comment} from '../model/home/Comment';
import {HttpClient} from '@angular/common/http';
import {Home} from '../model/home/Home';
import {CheckIn} from '../model/home/CheckIn';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  constructor(private http: HttpClient) { }
  getListCheckIn(): Observable<Home> {
    return this.http.get<Home>('http://localhost:8080/user/list-home-checkin');
  }
  createCheckIn(checkin: CheckIn): Observable<CheckIn> {
    return this.http.put('http://localhost:8080/user/check-in', checkin);
  }
}
