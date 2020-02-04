import {Component, Input, OnInit} from '@angular/core';
import {CheckinService} from '../../../service/checkin.service';
import {CheckIn} from '../../../model/home/CheckIn';
import {Comment} from '../../../model/home/Comment';

@Component({
  selector: 'app-home-checkin',
  templateUrl: './home-checkin.component.html',
  styleUrls: ['./home-checkin.component.css']
})
export class HomeCheckinComponent implements OnInit {
  @Input() homeId: number;
  isCheckin = false;
  constructor(private checkInService: CheckinService) { }

  ngOnInit() {
  }

  onCheckIn() {
    const checkIn: CheckIn = {
      isCheckin: true,
      homeId: this.homeId
    }
    this.checkInService.createCheckIn(checkIn).subscribe(
      result => {
        console.log('Thanh cong');
        this.isCheckin = true;
      },
      error => console.log('That bai')
    );
  }
}
