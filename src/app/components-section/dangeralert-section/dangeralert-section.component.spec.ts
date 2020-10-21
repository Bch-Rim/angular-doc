import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangeralertSectionComponent } from './dangeralert-section.component';

describe('DangeralertSectionComponent', () => {
  let component: DangeralertSectionComponent;
  let fixture: ComponentFixture<DangeralertSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangeralertSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangeralertSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
