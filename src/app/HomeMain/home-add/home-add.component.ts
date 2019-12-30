import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HomeService} from '../../service/home.service';
import {TypeHome} from '../../models/TypeHome';
import {TypeHomeService} from '../../service/type-home.service';
import {Home} from '../../models/Home';
import {TypeRoom} from '../../models/TypeRoom';
import {TypeRoomService} from '../../service/type-room.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home-add',
  templateUrl: './home-add.component.html',
  styleUrls: ['./home-add.component.css']
})
export class HomeAddComponent implements OnInit {

  constructor(private homeService: HomeService,
              private typeHomeService: TypeHomeService,
              private typeRoomService: TypeRoomService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  typeHomeList: TypeHome[];
  typeRoomList: TypeRoom[];
  formHome: FormGroup;
  loading =  false;
  submitted = false;
  ngOnInit() {
    this.formHome = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      bedroom: ['', Validators.required],
      bathroom: ['', Validators.required],
      price: ['', Validators.required],
      typeHome: ['', Validators.required],
      typeRoom: ['', Validators.required],
      description: ['', Validators.required]
    });
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
  get f() {
    return this.formHome.controls;
  }
  get typeHome() {
    return this.formHome.get('typeHome');
  }
  get typeRoom() {
    return this.formHome.get('typeRoom');
  }
  onSubmit() {
    this.submitted = true;
    if (this.formHome.invalid) {
      return;
    } else {
      alert(JSON.stringify(this.formHome.value));
    }
    this.loading = true;
    const {name, address, bathroom, bedroom, typeHome, typeRoom, price, description} = this.formHome.value;
    const home: Home = {
      name,
      address,
      bathroom,
      bedroom,
      typeHome : {
        id: typeHome
      },
      typeRoom : {
        id: typeRoom
      },
      price,
      description,
    };
    this.homeService.addHome(home).subscribe(
      result => {
        alert('Thanh cong');
        this.router.navigate(['/homes']);
      },
      error => console.log('That bai')
    );
  }

  changeHomeId(e) {
    this.typeHome.patchValue(e.target.value, {
      onlySelf: true
    });
  }
  changeRoomId(e) {
    this.typeRoom.patchValue(e.target.value, {
      onlySelf: true
    });
  }
}
