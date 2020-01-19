import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeManagerHostComponent } from './home-manager-host.component';

describe('HomeManagerHostComponent', () => {
  let component: HomeManagerHostComponent;
  let fixture: ComponentFixture<HomeManagerHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeManagerHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeManagerHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
