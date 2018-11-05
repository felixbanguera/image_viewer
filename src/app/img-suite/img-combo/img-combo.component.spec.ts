import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgComboComponent } from './img-combo.component';

describe('ImgComboComponent', () => {
  let component: ImgComboComponent;
  let fixture: ComponentFixture<ImgComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
