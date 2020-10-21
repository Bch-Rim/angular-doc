import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAlertFormSectionComponent } from './success-alert-form-section.component';

describe('SuccessAlertFormSectionComponent', () => {
  let component: SuccessAlertFormSectionComponent;
  let fixture: ComponentFixture<SuccessAlertFormSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessAlertFormSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessAlertFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
