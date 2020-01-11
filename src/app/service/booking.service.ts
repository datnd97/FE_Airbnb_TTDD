import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Booking} from "../models/Booking";

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookingUrl = environment.bookingUrl;
  constructor(private http: HttpClient) { }

  getListBooking(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.bookingUrl);
  }
  getBooking(id: number): Observable<Booking> {
    return this.http.get<Booking>(this.bookingUrl + id);
  }
  deleteBooking(id: number): Observable<void> {
    return this.http.delete<void>(this.bookingUrl + id);
  }
  createBooking(id: number, booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(this.bookingUrl + id, booking);
  }
}
