import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleimageSectionComponent } from './doubleimage-section.component';

describe('DoubleimageSectionComponent', () => {
  let component: DoubleimageSectionComponent;
  let fixture: ComponentFixture<DoubleimageSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleimageSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleimageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
