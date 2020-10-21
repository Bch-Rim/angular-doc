import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningalertSectionComponent } from './warningalert-section.component';

describe('WarningalertSectionComponent', () => {
  let component: WarningalertSectionComponent;
  let fixture: ComponentFixture<WarningalertSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningalertSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningalertSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
