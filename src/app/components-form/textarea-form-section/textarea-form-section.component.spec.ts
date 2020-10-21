import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaFormSectionComponent } from './textarea-form-section.component';

describe('TextareaFormSectionComponent', () => {
  let component: TextareaFormSectionComponent;
  let fixture: ComponentFixture<TextareaFormSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextareaFormSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
