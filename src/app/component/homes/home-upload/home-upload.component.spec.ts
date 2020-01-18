import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUploadComponent } from './home-upload.component';

describe('HomeUploadComponent', () => {
  let component: HomeUploadComponent;
  let fixture: ComponentFixture<HomeUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
