import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Booking} from "../model/home/Booking";
import {ListBooking} from '../model/home/ListBooking';
import {BookingReponse} from '../model/home/BookingReponse';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private userBookingUrl = environment.userBookingUrl;
  private hostBookingUrl = environment.hostBookingUrl;
  constructor(private http: HttpClient) { }

  getListBookingByUser(): Observable<BookingReponse> {
    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer ' + sessionStorage.getItem('token')
    // });
    // return this.http.get<BookingReponse>(this.userBookingUrl + 'list-booking-user',  {headers});
    return this.http.get<BookingReponse>(this.userBookingUrl + 'list-booking-user');
  }
  getListBookingByHost(): Observable<BookingReponse> {
    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer ' + sessionStorage.getItem('token')
    // });
    return this.http.get<BookingReponse>(this.hostBookingUrl + 'list-booking-host');
  }
  getBooking(id: number): Observable<Booking> {
    return this.http.get<Booking>(this.hostBookingUrl + id);
  }
  deleteBooking(id: number): Observable<void> {
    return this.http.delete<void>(this.hostBookingUrl + id);
  }
  deleteBookingByUser(id: number): Observable<void> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + sessionStorage.getItem('token')
    });
    return this.http.delete<void>(this.userBookingUrl + id, {headers});

  }
  createBooking(id: number, booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(this.userBookingUrl + 'create/' + id, booking);
  }

}
