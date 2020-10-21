import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichtextFormSectionComponent } from './richtext-form-section.component';

describe('RichtextFormSectionComponent', () => {
  let component: RichtextFormSectionComponent;
  let fixture: ComponentFixture<RichtextFormSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichtextFormSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichtextFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
