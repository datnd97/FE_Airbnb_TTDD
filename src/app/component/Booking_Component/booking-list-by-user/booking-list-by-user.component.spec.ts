import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingListByUserComponent } from './booking-list-by-user.component';

describe('BookingListByUserComponent', () => {
  let component: BookingListByUserComponent;
  let fixture: ComponentFixture<BookingListByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingListByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingListByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
