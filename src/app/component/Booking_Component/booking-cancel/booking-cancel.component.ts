import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookingService} from '../../../service/booking.service';
import {error} from 'util';
import {Booking} from '../../../model/home/Booking';
import {BookingReponse} from '../../../model/home/BookingReponse';

@Component({
  selector: 'app-booking-cancel',
  templateUrl: './booking-cancel.component.html',
  styleUrls: ['./booking-cancel.component.css']
})
export class BookingCancelComponent implements OnInit {
  constructor(private bookingService: BookingService) { }
  @Input() bookingId: number;
  @Output() valueChange = new EventEmitter<BookingReponse[]>();
  listBooking: any;
  errorMgs: any;
  msg: any;
  role: string;
  token: string;
  name: string;
  ngOnInit() {
    this.role = sessionStorage.getItem('role');
    this.token = sessionStorage.getItem('token');
    this.name = sessionStorage.getItem('name');
  }
  onDelete() {
    console.log(this.bookingId);
    if (confirm('Are you sure!!!')) {
      this.bookingService.deleteBookingByUser(this.bookingId).subscribe(
        (result) => {
          this.msg = result;
          console.log(this.msg);
          this.onGetListBooking();
          // tslint:disable-next-line:no-shadowed-variable
        }, error => {
          alert(error);
        }
      );
    }
  }


 onGetListBooking() {
    this.bookingService.getListBookingByUser().subscribe(
      data => {
       this.listBooking = data;
       this.valueChange.emit(this.listBooking);
      }
    );
  }
}
