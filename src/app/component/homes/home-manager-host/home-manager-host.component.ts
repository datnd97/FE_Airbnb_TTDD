import { Component, OnInit } from '@angular/core';
import {Home} from '../../../model/home/Home';
import {Observable} from 'rxjs';
import {HomeService} from '../../../service/home.service';
import {TypeHome} from '../../../model/home/TypeHome';
import {TypeRoom} from '../../../model/home/TypeRoom';
import {TypeHomeService} from '../../../service/type-home.service';
import {TypeRoomService} from '../../../service/type-room.service';

@Component({
  selector: 'app-home-manager-host',
  templateUrl: './home-manager-host.component.html',
  styleUrls: ['./home-manager-host.component.css']
})
export class HomeManagerHostComponent implements OnInit {
  homeList: Home[];

  constructor(private homeService: HomeService,
              private typeHomeService: TypeHomeService,
              private typeRoomService: TypeRoomService,) { }

  ngOnInit() {
    this.getListHome();
  }

  getListHome() {
    this.homeService.getListHomeByHost().subscribe(
      result => {
        this.homeList = result;
      },
      error => {
        alert('Error get Home list');
      }
    );
  }

}
