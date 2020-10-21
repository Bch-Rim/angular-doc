import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningAlertFormSectionComponent } from './warning-alert-form-section.component';

describe('WarningAlertFormSectionComponent', () => {
  let component: WarningAlertFormSectionComponent;
  let fixture: ComponentFixture<WarningAlertFormSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningAlertFormSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningAlertFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
