import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Home} from '../../../model/home/Home';
import {Observable} from 'rxjs';
import {TypeHome} from '../../../model/home/TypeHome';
import {TypeRoom} from '../../../model/home/TypeRoom';
import {TypeRoomService} from '../../../service/type-room.service';
import {HomeService} from '../../../service/home.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home-status',
  templateUrl: './home-status.component.html',
  styleUrls: ['./home-status.component.css']
})
export class HomeStatusComponent implements OnInit {
  @Input() home: Home;
  @Output() notify = new EventEmitter<boolean>();
  isActive: boolean ;
  id: any;
  typeHomeId: any;
  typeHomeRoom: any;
  typeHomeList: Observable<TypeHome[]>;
  typeRoomList: Observable<TypeRoom[]>;
  HomeList: Observable<Home[]>;
  constructor(private typeHomeService: TypeRoomService,
              private typeRoomService: TypeRoomService,
              private homeService: HomeService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      result => {this.id = result.id; }
    );
  }

  ngOnInit() {
    this.reloadDate();
  }
  updateActive(isActive: boolean) {
    const home = {
      id: this.home.id,
      name: this.home.name,
      address: this.home.address,
      bedroom: this.home.bedroom,
      bathroom: this.home.bathroom,
      price: this.home.price,
      description: this.home.description,
      typeHome: {
        id: this.home.typeHome.id,
      },
      typeRoom: {
        id: this.home.typeRoom.id,
      },
      status: isActive
    };
    console.log(home);
    this.isActive = home.status;
    this.homeService.updateHome(home, this.home.id).subscribe(
      result => {
        this.notify.emit(this.isActive);
        console.log('Thanh cong');
      },
          error => console.log('That bai')
    );
  }

  reloadDate() {
    this.typeHomeList = this.typeHomeService.getListTypeRoom();
    this.typeRoomList = this.typeRoomService.getListTypeRoom();
    this.HomeList = this.homeService.getListHome();
  }
}
