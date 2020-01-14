import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TypeHome} from '../model/home/TypeHome';
import {TypeRoom} from '../model/home/TypeRoom';

@Injectable({
  providedIn: 'root'
})
export class TypeRoomService {
  private typeRoomUrl = environment.typeRoomUrl;
  constructor(private http: HttpClient) { }
  getListTypeRoom(): Observable<TypeRoom[]> {
    return this.http.get<TypeRoom[]>(this.typeRoomUrl);
  }
  getTypeRoom(id: number): Observable<TypeRoom> {
    return this.http.get<TypeRoom>(this.typeRoomUrl + id);
  }
  deleteTypeRoom(id: number): Observable<void> {
    return this.http.delete<void>(this.typeRoomUrl + id);
  }
  updateTypeHome(typeRoom: TypeRoom): Observable<TypeRoom> {
    return this.http.put<TypeRoom>(this.typeRoomUrl + typeRoom.id, typeRoom);
  }
  addTypeHome(typeRoom: TypeRoom): Observable<TypeHome> {
    return this.http.post<TypeRoom>(this.typeRoomUrl, typeRoom);
  }
}
