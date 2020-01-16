import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingListHiredHostComponent } from './booking-list-hired-host.component';

describe('BookingListHiredHostComponent', () => {
  let component: BookingListHiredHostComponent;
  let fixture: ComponentFixture<BookingListHiredHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingListHiredHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingListHiredHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
