import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerAlertFormSectionComponent } from './danger-alert-form-section.component';

describe('DangerAlertFormSectionComponent', () => {
  let component: DangerAlertFormSectionComponent;
  let fixture: ComponentFixture<DangerAlertFormSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangerAlertFormSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangerAlertFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
