import { Component, OnInit } from '@angular/core';
import {Home} from '../../../model/home/Home';
import {HomeService} from '../../../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  p = 1;
  count = 4;
  searchText;
  listHome: any ;
  selectedHome: Home;
  constructor(private homeService: HomeService,
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



}
