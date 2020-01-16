import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbCarousel, NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = [1, 2, 3, 4, 5, 6].map(() => `https://picsum.photos/1366/300?random&t=${Math.random()}`);
  showNavigationArrows = true;
  showNavigationIndicators = true;
  pauseOnHover = true;

  @ViewChild('mycarousel', {static : true}) carousel: NgbCarousel;
  constructor() { }

  ngOnInit() {
  }
  onSlide(slideEvent: NgbSlideEvent) {
    // console.log(slideEvent.source);
    // console.log(NgbSlideEventSource.ARROW_LEFT);
    // console.log(slideEvent.paused);
    // console.log(NgbSlideEventSource.INDICATOR);
    // console.log(NgbSlideEventSource.ARROW_RIGHT);
  }

}
