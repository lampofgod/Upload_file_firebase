import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingImgComponent } from './processing-img.component';

describe('ProcessingImgComponent', () => {
  let component: ProcessingImgComponent;
  let fixture: ComponentFixture<ProcessingImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessingImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
