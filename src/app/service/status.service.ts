import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Status} from '../models/Status';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private StatusUrl = environment.statusUrl;
  getListStatus(): Observable<Status[]> {
    return this.http.get<Status[]>(this.StatusUrl);
  }
  getStatus(id: number): Observable<Status> {
    return this.http.get<Status>(this.StatusUrl + id);
  }
  updateStatus(status: Status): Observable<Status> {
    return this.http.put<Status>(this.StatusUrl + status.id, status);
  }
  deleteStatus(id: number): Observable<void> {
    return this.http.delete<void>(this.StatusUrl + id);
  }
  addStatus(status: Status): Observable<Status> {
    return this.http.post<Status>(this.StatusUrl, status);
  }
  constructor(private http: HttpClient) { }
}
