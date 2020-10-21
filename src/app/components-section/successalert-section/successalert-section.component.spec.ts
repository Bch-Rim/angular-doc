import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessalertSectionComponent } from './successalert-section.component';

describe('SuccessalertSectionComponent', () => {
  let component: SuccessalertSectionComponent;
  let fixture: ComponentFixture<SuccessalertSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessalertSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessalertSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
