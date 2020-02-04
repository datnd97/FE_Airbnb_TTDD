import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCheckinComponent } from './home-checkin.component';

describe('HomeCheckinComponent', () => {
  let component: HomeCheckinComponent;
  let fixture: ComponentFixture<HomeCheckinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCheckinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
