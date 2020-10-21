import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFormSectionComponent } from './text-form-section.component';

describe('TextFormSectionComponent', () => {
  let component: TextFormSectionComponent;
  let fixture: ComponentFixture<TextFormSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextFormSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
