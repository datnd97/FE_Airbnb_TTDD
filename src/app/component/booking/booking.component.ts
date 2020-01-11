import {Component, Input, OnInit} from '@angular/core';
import {Home} from '../../models/Home';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BookingService} from '../../service/booking.service';
declare var $: any;
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
      beginDate: ['', Validators.required],
      endDate: ['', Validators.required],
      children: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3)])],
      guest: ['', Validators.required]
    });

  }
  onSubmit(value) {
    console.log(this.id);
    const formData = new FormData();
    formData.append('beginDate', value.beginDate);
    formData.append('endDate', value.endDate);
    formData.append('children', value.children);
    formData.append('guest', value.guest);
    // @ts-ignore
    this.bookingService.createBooking(this.id, formData).subscribe(result => {
      console.log('Thanh cong');
      // this.router.navigate(['']);
  });
}

  onReset() {
    this.bookingForm.reset();
  }
}
