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
  @Input() bookingId: number;
  @Output() valueChange = new EventEmitter<BookingReponse[]>();
  constructor(private bookingService: BookingService) { }
  listBooking: any;
  ngOnInit() {
  }
  onDelete() {
    if (confirm('Are you sure!!!')) {
      this.bookingService.deleteBookingByUser(this.bookingId).subscribe(
        next => {
          this.onGetListBooking();
          console.log('Da xoa thanh cong');
          // tslint:disable-next-line:no-shadowed-variable
        }, error => {
          console.log(error);
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
