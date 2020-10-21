import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeFormSectionComponent } from './code-form-section.component';

describe('CodeFormSectionComponent', () => {
  let component: CodeFormSectionComponent;
  let fixture: ComponentFixture<CodeFormSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeFormSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
