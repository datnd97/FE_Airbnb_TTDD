import { Component, OnInit } from '@angular/core';
import {CheckinService} from '../../../service/checkin.service';
import {Home} from '../../../model/home/Home';

@Component({
  selector: 'app-home-checkin-list',
  templateUrl: './home-checkin-list.component.html',
  styleUrls: ['./home-checkin-list.component.css']
})
export class HomeCheckinListComponent implements OnInit {

  constructor(private checkInService: CheckinService) { }
  checkInList: Home;
  ngOnInit() {
    this.getAllCheckIn();
  }
  getAllCheckIn() {
    this.checkInService.getListCheckIn().subscribe(
      result => { this.checkInList = result,
        console.log('>>>> Comment List: ' + JSON.stringify(this.checkInList)); },
      error => {
        console.log(error);
      }
    );
  }
}
