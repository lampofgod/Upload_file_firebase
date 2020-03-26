import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadImgComponent } from './download-img.component';

describe('DownloadImgComponent', () => {
  let component: DownloadImgComponent;
  let fixture: ComponentFixture<DownloadImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
