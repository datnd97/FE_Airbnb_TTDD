import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCheckinListComponent } from './home-checkin-list.component';

describe('HomeCheckinListComponent', () => {
  let component: HomeCheckinListComponent;
  let fixture: ComponentFixture<HomeCheckinListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCheckinListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCheckinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
