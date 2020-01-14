import {Component, Input, OnInit} from '@angular/core';
import {Home} from '../../../model/home/Home';
import {ActivatedRoute, Router} from '@angular/router';
import {HomeService} from '../../../service/home.service';
import {query} from '@angular/animations';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

  id: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private homeService: HomeService) {
    this.route.params.subscribe(
      result => {this.id = result.id; console.log(this.id) }
    );
  }
  home: Home;
  pageTitle = 'Home Detail';
  netImage: any = '../assets/img/house.jpg';
  isActive = false;
  changeActive(active: boolean) {
    this.isActive = active;
    console.log( "Active:" + this.isActive);
  }
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
  editHome() {
    this.router.navigate(['/edit', this.home.id]);
  }

  deleteHome() {
    this.homeService.deleteHome(this.home.id).subscribe(
      result => { alert('Delete Home Success'),
        this.onBack();
      }
    );
  }
  // getHouseId() {
  //   const id = +this.activatedRoute.snapshot.paramMap.get('id');
  //   this.houseService.getHouseId(this.id).subscribe(result => {
  //     this.houseDemo = result.data;
  //     console.log('>>>>Data detail house: ' + JSON.stringify(this.houseDemo));
  //     this.house = this.convertHouseId(this.houseDemo, this.sliptString(this.houseDemo));
  //   }, error => {
  //     console.log(error);
  //   });
  //   console.log(this.house);
  // }

  // public sliptString(house: DataHouseDetails): any {
  //   const arrayPicture = house.picture.split(' ');
  //   return arrayPicture;
  // } co the ko xai

  // public convertHouseId(house: DataHouseDetails, array: string[]): HouseConvertById {
  //   const houseDetail = new HouseConvertById(house.id, house.name, house.catName, array, house.address,
  //     house.bedroomNumber, house.bathroomNumber, house.description, house.price, house.area, house.userName, house.userId);
  //   return houseDetail;
  // }
}
