import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JavaSampleApproach';
  description = 'Angular-SpringBoot Demo';

  role = sessionStorage.getItem('role');


  ngOnInit(): void {
  }


}
