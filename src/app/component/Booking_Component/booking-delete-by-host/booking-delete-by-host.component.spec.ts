import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDeleteByHostComponent } from './booking-delete-by-host.component';

describe('BookingDeleteByHostComponent', () => {
  let component: BookingDeleteByHostComponent;
  let fixture: ComponentFixture<BookingDeleteByHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingDeleteByHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingDeleteByHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
