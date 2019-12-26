import {Component, Input, OnInit} from '@angular/core';
import {Status} from '../../models/Status';

@Component({
  selector: 'app-home-status',
  templateUrl: './home-status.component.html',
  styleUrls: ['./home-status.component.css']
})
export class HomeStatusComponent implements OnInit {
  @Input() status = Status;


  constructor() { }

  ngOnInit() {
  }

  addStatus() {
    console.log('thanh cong');
  }
}
