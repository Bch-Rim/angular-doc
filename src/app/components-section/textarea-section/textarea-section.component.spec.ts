import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaSectionComponent } from './textarea-section.component';

describe('TextareaSectionComponent', () => {
  let component: TextareaSectionComponent;
  let fixture: ComponentFixture<TextareaSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextareaSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
