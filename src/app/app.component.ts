import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

//Jquery:
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JavaSampleApproach';
  description = 'Angular-SpringBoot Demo';
<<<<<<< HEAD
  role = sessionStorage.getItem('role');
=======

  ngOnInit(): void {
  }


>>>>>>> a2504c7d40eae8fa1c57d1c67f621d033ee339f1
}
