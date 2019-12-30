import {Component, Input, OnInit} from '@angular/core';
import {Home} from '../../models/Home';
import {ActivatedRoute, Router} from '@angular/router';
import {HomeService} from '../../service/home.service';
import {Status} from '../../models/Status';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  home: Home;
  pageTitle = 'Home Detail';
  selectStatus: boolean;
  netImage: any = '../assets/img/house.jpg';
  constructor(private route: ActivatedRoute,
              private router: Router,
              private homeService: HomeService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getHome(id);
    }
  }
  getHome(id: number) {
    this.homeService.getHome(id).subscribe(
      result => this.home = result,
          error => console.log('Khong tim thay'));
  }
  onBack() {
    this.router.navigate(['/homes']);
  }


}
