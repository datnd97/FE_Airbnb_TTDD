import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Home} from '../../../model/home/Home';
import {BookingReponse} from '../../../model/home/BookingReponse';
import {HomeService} from '../../../service/home.service';

@Component({
  selector: 'app-home-delete',
  templateUrl: './home-delete.component.html',
  styleUrls: ['./home-delete.component.css']
})
export class HomeDeleteComponent implements OnInit {
  @Input() home: Home;
  @Output() valueChange = new EventEmitter<Home[]>();
  constructor(private homeService: HomeService) { }
  list: any;
  ngOnInit() {
  }

  onDelete() {
    if (confirm('Are you sure!!!')) {
      this.homeService.deleteHome(this.home.id).subscribe(
        result => {
          this.onGetHome();
          // tslint:disable-next-line:no-shadowed-variable
        }, error => {
          alert(error);
        }
      );
    }
  }
  onGetHome() {
    this.homeService.getListHomeByHost().subscribe(
      data => {
        this.list = data;
        this.valueChange.emit(this.list);
      }
    );
  }
}
