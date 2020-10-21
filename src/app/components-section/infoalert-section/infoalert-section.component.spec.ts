import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoalertSectionComponent } from './infoalert-section.component';

describe('InfoalertSectionComponent', () => {
  let component: InfoalertSectionComponent;
  let fixture: ComponentFixture<InfoalertSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoalertSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoalertSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
