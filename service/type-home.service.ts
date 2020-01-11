import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Home} from '../models/Home';
import {TypeHome} from '../models/TypeHome';
import {Status} from '../models/Status';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TypeHomeService {
  private typeHomeUrl = environment.typeHomeUrl;
  constructor(private http: HttpClient) { }
  getListTypeHome(): Observable<TypeHome[]> {
    return this.http.get<TypeHome[]>(this.typeHomeUrl);
  }
  getTypeHome(id: number): Observable<TypeHome> {
    return this.http.get<TypeHome>(this.typeHomeUrl + id);
  }
  deleteTypeHome(id: number): Observable<void> {
    return this.http.delete<void>(this.typeHomeUrl + id);
  }
  updateTypeHome(typeHome: TypeHome): Observable<TypeHome> {
    return this.http.put<TypeHome>(this.typeHomeUrl + typeHome.id, typeHome);
  }
  addTypeHome(typeHome: TypeHome): Observable<TypeHome> {
    return this.http.post<TypeHome>(this.typeHomeUrl, typeHome);
  }
}
