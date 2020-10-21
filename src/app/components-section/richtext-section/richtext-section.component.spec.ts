import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichtextSectionComponent } from './richtext-section.component';

describe('RichtextSectionComponent', () => {
  let component: RichtextSectionComponent;
  let fixture: ComponentFixture<RichtextSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichtextSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichtextSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
