import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgSuiteComponent } from './img-suite.component';

describe('ImgSuiteComponent', () => {
  let component: ImgSuiteComponent;
  let fixture: ComponentFixture<ImgSuiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgSuiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgSuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
