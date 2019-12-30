import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Status} from '../../models/Status';
import {StatusService} from '../../service/status.service';

@Component({
  selector: 'app-home-status',
  templateUrl: './home-status.component.html',
  styleUrls: ['./home-status.component.css']
})
export class HomeStatusComponent implements OnInit {


  constructor(private statusService: StatusService) { }

  ngOnInit() {
  }


}
