import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPageCategoryDialogComponent } from './add-page-category-dialog.component';

describe('AddPageCategoryDialogComponent', () => {
  let component: AddPageCategoryDialogComponent;
  let fixture: ComponentFixture<AddPageCategoryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPageCategoryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPageCategoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
