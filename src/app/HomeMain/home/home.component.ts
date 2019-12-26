import { Component, OnInit } from '@angular/core';
import {Home} from '../../models/Home';
import {HomeService} from '../../service/home.service';
import {Status} from '../../models/Status';
import {StatusService} from '../../service/status.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  p = 1;
  count = 4;
  status: Status[];
  listHome: Home[] = [];
  selectedHome: Home;
  constructor(private homeService: HomeService,
              private statusService: StatusService
  ) { }

  ngOnInit() {
    this.getListHome();
  }
  getListHome() {
    this.homeService.getListHome().subscribe(
      result => {
        this.listHome = result;
      },
      error => {
        alert('Error get Home list');
      }
    );
  }
  getListStatus() {
    this.statusService.getListStatus().subscribe(
      result => this.status = result,
          error => console.log('Khong nhan duoc')
    );
  }


}
