import { Component, OnInit } from '@angular/core';
import {Home} from '../../../model/home/Home';
import {Observable} from 'rxjs';
import {HomeService} from '../../../service/home.service';
import {TypeHome} from '../../../model/home/TypeHome';
import {TypeRoom} from '../../../model/home/TypeRoom';
import {TypeHomeService} from '../../../service/type-home.service';
import {TypeRoomService} from '../../../service/type-room.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BookingReponse} from '../../../model/home/BookingReponse';

@Component({
  selector: 'app-home-manager-host',
  templateUrl: './home-manager-host.component.html',
  styleUrls: ['./home-manager-host.component.css']
})
export class HomeManagerHostComponent implements OnInit {
  homeList: Home[];
  id: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private homeService: HomeService) {
    this.route.params.subscribe(
      result => {this.id = result.id; console.log(this.id)}
    );
  }
  ngOnInit() {
    this.getListHome();
  }

  getListHome() {
    this.homeService.getListHomeByHost().subscribe(
      result => {
        this.homeList = result;
        console.log('>>>home list:' + JSON.stringify(this.homeList));

      },
      error => {
        alert('Error get Home list');
      }
    );
  }
  // editHome() {
  //   this.router.navigate(['/edit', this.home.id]);
  // }
  deleteHome(id: string) {
    this.homeService.deleteHome(this.id).subscribe(
      result => { alert('Delete Home Success'),
        this.onBack();
      }
    );
  }
  onBack() {
    this.router.navigate(['/homes']);
  }

  onDelete() {

  }

  receive(list: Home[]) {
    this.homeList = list;
  }
}
