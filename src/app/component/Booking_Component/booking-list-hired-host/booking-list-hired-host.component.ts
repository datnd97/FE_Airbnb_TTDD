import {Component, OnInit} from '@angular/core';
import {BookingReponse} from '../../../model/home/BookingReponse';
import {HttpClient} from '@angular/common/http';
import {BookingService} from '../../../service/booking.service';

@Component({
  selector: 'app-booking-list-hired-host',
  templateUrl: './booking-list-hired-host.component.html',
  styleUrls: ['./booking-list-hired-host.component.css']
})
export class BookingListHiredHostComponent implements OnInit {
  bookingList: any;
  role = '';
  token = '';
  name = '';
  constructor(private bookingService: BookingService) {
  }

  ngOnInit() {
    this.getListHireBooking();
    this.role = sessionStorage.getItem('role');
    this.token = sessionStorage.getItem('token');
    this.name = sessionStorage.getItem('name');
  }

  getListHireBooking() {
    this.bookingService.getListBookingByHost().subscribe(result => {
        this.bookingList = result;
        console.log('>>>>order list:' + JSON.stringify(this.bookingList));
      },
      error => alert('Khong tim thay data'));
  }
}
