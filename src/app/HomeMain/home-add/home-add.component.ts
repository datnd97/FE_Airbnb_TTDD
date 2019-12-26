import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HomeService} from '../../service/home.service';
import {TypeHome} from '../../models/TypeHome';
import {TypeHomeService} from '../../service/type-home.service';
import {Home} from '../../models/Home';
import {TypeRoom} from '../../models/TypeRoom';
import {TypeRoomService} from '../../service/type-room.service';
@Component({
  selector: 'app-home-add',
  templateUrl: './home-add.component.html',
  styleUrls: ['./home-add.component.css']
})
export class HomeAddComponent implements OnInit {

  constructor(private homeService: HomeService,
              private typeHomeService: TypeHomeService,
              private typeRoomService: TypeRoomService) { }

  typeHomeList: TypeHome[];
  typeRoomList: TypeRoom[];
  formHome = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    bedroom: new FormControl(''),
    bathroom: new FormControl(''),
    price: new FormControl(''),
    typeHomeId: new FormControl(''),
    typeRoomId: new FormControl(''),
    description: new FormControl(''),

  });
  ngOnInit() {
    this.typeHomeService.getListTypeHome().subscribe(
      result =>
        this.typeHomeList = result,
          error => console.log('Khong nhan duoc')
    );
    this.typeRoomService.getListTypeRoom().subscribe(
      result => this.typeRoomList = result,
        error => console.log('Khong nhan duoc')
    );
  }
  onSubmit() {
    const {name, address, bedroom, bathroom, price, typeHomeId, typeRoomId, description} = this.formHome.value;
    const home: Home = {
      name,
      address,
      bedroom,
      bathroom,
      price,
      typeHome : {
        id: typeHomeId
      },
      typeRoom : {
        id: typeRoomId
      },
      description,
    };
    this.homeService.addHome(home).subscribe(
      result => console.log('Thanh cong'),
      error => console.log('That bai')
    );
  }

}
