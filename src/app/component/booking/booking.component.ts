import {Component, Input, OnInit} from '@angular/core';
import {Home} from '../../model/home/Home';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BookingService} from '../../service/booking.service';
declare var $: any;
import {Location} from '@angular/common';
import {Booking} from '../../model/home/Booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  constructor(private fb: FormBuilder,
              private router: Router,
              private bookingService: BookingService,
              private route: ActivatedRoute,
              private location: Location
          ) {
    this.route.params.subscribe(
      result => {this.id = result.id; console.log(this.id); }
    );
  }
  id: any;
  @Input() home: Home;
  begin: any;
  last: any;
  bookingForm: FormGroup;
  date: any;
  ngOnInit() {
    this.bookingForm = this.fb.group({
      checkin: ['', Validators.required],
      checkout: ['', Validators.required],
      children: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3)])],
      guest: ['', Validators.required]
    });

  }
  onSubmit(value) {
    console.log(this.id);
    const {checkin, checkout, children, guest} = this.bookingForm.value;
    alert(JSON.stringify(this.bookingForm.value));
    const booking: Booking = {
      checkin,
      checkout,
      children,
      guest,
      cancelled: false
    };
    this.bookingService.createBooking(this.id, booking).subscribe(result => {
      console.log('Thanh cong');
      this.router.navigate(['']);
  });
}

  onReset() {
    this.bookingForm.reset();
  }
  goBack(): void {
    this.location.back();
  }
}
