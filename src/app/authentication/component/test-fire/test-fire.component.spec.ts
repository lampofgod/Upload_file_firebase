import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFireComponent } from './test-fire.component';

describe('TestFireComponent', () => {
  let component: TestFireComponent;
  let fixture: ComponentFixture<TestFireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
