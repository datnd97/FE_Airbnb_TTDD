import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BookingService} from '../../../service/booking.service';
import {BookingReponse} from '../../../model/home/BookingReponse';
import {Home} from '../../../model/home/Home';

@Component({
  selector: 'app-booking-list-by-user',
  templateUrl: './booking-list-by-user.component.html',
  styleUrls: ['./booking-list-by-user.component.css']
})
export class BookingListByUserComponent implements OnInit {
  bookingList: any;
  constructor(private bookingService: BookingService) { }
  ngOnInit() {
    this.getListBooking();
  }
  getListBooking() {
    this.bookingService.getListBookingByUser().subscribe(result => {
      this.bookingList = result;
      console.log('>>>>order list:' + JSON.stringify(this.bookingList));
    },
      error => alert('Khong tim thay data'));
  }

  receiveBooking(listBooking: BookingReponse[]) {
    this.bookingList = listBooking;
  }

}
