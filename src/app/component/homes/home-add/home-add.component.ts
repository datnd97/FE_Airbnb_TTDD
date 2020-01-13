import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HomeService} from '../../../service/home.service';
import {TypeHome} from '../../../models/TypeHome';
import {TypeHomeService} from '../../../service/type-home.service';
import {Home} from '../../../models/Home';
import {TypeRoom} from '../../../models/TypeRoom';
import {TypeRoomService} from '../../../service/type-room.service';
import {Router} from '@angular/router';
import {HttpEventType, HttpResponse} from '@angular/common/http';
// import * as firebase from 'firebase';
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
              private router: Router,
              // private fb: AngularFireDatabase
              ) { }
  get f() {
    return this.formHome.controls;
  }
  get typeHome() {
    return this.formHome.get('typeHome');
  }
  get typeRoom() {
    return this.formHome.get('typeRoom');
  }
  isActive = true;
  typeHomeList: TypeHome[];
  typeRoomList: TypeRoom[];
  formHome: FormGroup;
  loading =  false;
  submitted = false;
  isClick = false;
  arrayPicture;
  ngOnInit() {
    this.formHome = this.formBuilder.group({
      name: ['', Validators.required],
      // picture: new FormControl(''),
      address: ['', Validators.required],
      bedroom: ['', Validators.required],
      bathroom: ['', Validators.required],
      price: ['', Validators.required],
      typeHome: ['', Validators.required],
      typeRoom: ['', Validators.required],
      description: ['', Validators.required],

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

  onSubmit() {
    this.submitted = true;
    if (this.formHome.invalid) {
      return;
    } else {
      alert(JSON.stringify(this.formHome.value));
    }
    this.loading = true;
    const {name, address, bathroom, bedroom, typeHome, typeRoom, price, description} = this.formHome.value;
    // this.arrayPicture = this.arrayPicture.trim(); cat phan thua
    // this.home.picture = this.arrayPicture;
    const home: Home = {
      name,
      // picture
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
      status: false
    };
    console.log(home);
    this.homeService.addHome(home).subscribe(
      result => {
        alert('Thanh cong');
        this.router.navigate(['/homes']);
      },
      error => console.log('That bai')
    );
  }

  // uploadFile(event) {
  //   this.arrayPicture = '';
  //   console.log(event);
  //   const file = event.target.files;
  //   const metadata = {
  //     contentType: 'image/jpeg',
  //   };
  //   let i = 0;
  //   while ( i < file.length ) {
  //     console.log('Outside ', i, file[i]);
  //     // @ts-ignore
  //     const uploadTask = firebase.storage().ref('img/' + file[i].name + Date.now()).put(file[i], metadata);
  //     uploadTask.on(
  //       firebase.storage.TaskEvent.STATE_CHANGED,
  //       (snapshot) => {
  //         const snap = snapshot as firebase.storage.UploadTaskSnapshot;
  //         console.log(snap);
  //       },
  //       (error) => {
  //         console.log(error);
  //       },
  //       () => {
  //         uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
  //           this.arrayPicture += downloadURL + ' ';
  //         });
  //       });
  //     i++;
  //   }
  // }

}
