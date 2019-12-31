import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Home} from '../../models/Home';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HomeService} from '../../service/home.service';
import {TypeHomeService} from '../../service/type-home.service';
import {TypeRoomService} from '../../service/type-room.service';
import {TypeHome} from '../../models/TypeHome';
import {TypeRoom} from '../../models/TypeRoom';

@Component({
  selector: 'app-home-edit',
  templateUrl: './home-edit.component.html',
  styleUrls: ['./home-edit.component.css']
})
export class HomeEditComponent implements OnInit {
  home: Home;
  id: any;
  public homeForm: FormGroup;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private homeService: HomeService,
              private typeHomeService: TypeHomeService,
              private typeRoomService: TypeRoomService) {
    this.route.params.subscribe(
      result => {this.id = result.id; }
    );
  }

  typeHomeList: TypeHome[];
  typeRoomList: TypeRoom[];
  typeHomeId: any = '';
  typeRoomId: any = '';

  ngOnInit() {
    this.typeHomeService.getListTypeHome().subscribe(
      result => {
        this.typeHomeList = result;
      },
      error => console.log('Khong nhan duoc')
    );
    this.typeRoomService.getListTypeRoom().subscribe(
      result => this.typeRoomList = result,
      error => console.log('Khong nhan duoc')
    );
    this.typeRoomId = 1;
    this.typeHomeId = 1;
    this.homeForm = this.fb.group({
      name: [''],
      address: [''],
      bedroom: [''],
      bathroom: [''],
      price: [''],
      typeHome: [''],
      typeRoom: [''],
      description: ['']
    });
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getHome(id);
    }


  }

  getHome(id: number) {
    this.homeService.getHome(id).subscribe(
      result => {
        this.home = result;
      },
      error => console.log('Khong tim thay'));
  }
  save() {

    const home = {
      id: this.home.id,
      name: this.home.name,
      address: this.home.address,
      bedroom: this.home.bedroom,
      bathroom: this.home.bathroom,
      price: this.home.price,
      description: this.home.description,
      typeHome: {
        id: this.typeHomeId,
      },
      typeRoom: {
        id: this.typeRoomId,
      }
    };
    console.log(home.typeRoom.id);
    this.homeService.updateHome( home, this.id).subscribe(
      result => {
        alert('Edit Thanh cong'),
          this.router.navigate(['/homes', this.home.id]);
      },
          error => console.log('That bat')
    );
  }
}
