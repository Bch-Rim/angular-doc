import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAlertFormSectionComponent } from './info-alert-form-section.component';

describe('InfoAlertFormSectionComponent', () => {
  let component: InfoAlertFormSectionComponent;
  let fixture: ComponentFixture<InfoAlertFormSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAlertFormSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAlertFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
