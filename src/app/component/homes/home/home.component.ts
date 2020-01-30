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
  private info: any;
  role: any;
  token: any;
  name: any;

  constructor(private homeService: HomeService,
  ) { }

  ngOnInit() {
    this.getListHome();
    // this.info = {
    //   userId: sessionStorage.getItem('id'),
    //   role : sessionStorage.getItem('role'),
    //   token : sessionStorage.getItem('token'),
    //   name : sessionStorage.getItem('name')
    // };
    this.role = sessionStorage.getItem('role');
    this.token = sessionStorage.getItem('token');
    this.name = sessionStorage.getItem('name');  }
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
