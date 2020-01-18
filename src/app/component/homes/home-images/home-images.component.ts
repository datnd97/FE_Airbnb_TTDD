import {Component, Input, OnInit} from '@angular/core';
import {HomeService} from '../../../service/home.service';
import {ActivatedRoute} from '@angular/router';
import {Home} from '../../../model/home/Home';
import {Observable} from 'rxjs';
import {TypeHome} from '../../../model/home/TypeHome';
import {TypeRoom} from '../../../model/home/TypeRoom';
import {TypeRoomService} from '../../../service/type-room.service';

@Component({
  selector: 'app-home-images',
  templateUrl: './home-images.component.html',
  styleUrls: ['./home-images.component.css']
})
export class HomeImagesComponent implements OnInit {
  @Input() home: Home;
  id: number;
  fileUploads: any;
  constructor(private typeHomeService: TypeRoomService,
              private typeRoomService: TypeRoomService,
              private homeService: HomeService,
              private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    $(document).ready(function(){
      $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
      });

      $(".zoom").hover(function(){

        $(this).addClass('transition');
      }, function(){

        $(this).removeClass('transition');
      });
    });

    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      this.id = +param;
      this.getFile(this.id);
    }

  }
  getFile(id: number) {
    this.homeService.getListUpload(this.id).subscribe(result => this.fileUploads = result);
  }

}
