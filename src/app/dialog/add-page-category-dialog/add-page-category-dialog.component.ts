import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { distinctUntilChanged } from 'rxjs/operators';
import { CategoryService } from 'src/app/services/category.service';
import { PageService } from 'src/app/services/page.service';
import { AddSectionDialogComponent } from '../add-section-dialog/add-section-dialog.component';

@Component({
  selector: 'app-add-page-category-dialog',
  templateUrl: './add-page-category-dialog.component.html',
  styleUrls: ['./add-page-category-dialog.component.scss']
})
export class AddPageCategoryDialogComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<AddSectionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private categoryService: CategoryService,
    private pageService: PageService) { }

  ngOnInit(): void {
    this.formGroup.valueChanges.pipe(distinctUntilChanged()).subscribe(res => {
      if (res.type == 'Page') {
        this.formGroup.setControl('categorie', new FormControl('', Validators.required))
      } else {
        this.formGroup.setControl('categorie', new FormControl('', []))
      }
    })
  }
  sidnav: any;
  page: any;
  types: string[] = ['Page', 'Category'];
  addType = "Page"
  formGroup = new FormGroup({
    type: new FormControl('Page', [Validators.required]),
    categorie: new FormControl('', []),
    title: new FormControl('', Validators.required)
  })

  onNoClick(): void {
    this.dialogRef.close();
  }


  getValidation() {
    return this.addType == 'Page' ? [Validators.required] : []
  }

  get f() { return this.formGroup.controls; }
  get result() { return this.formGroup.value }

  add() {
    if (this.formGroup.get('type').value == 'Category') {
      if (this.formGroup.valid) {
        this.categoryService.post({
          title: this.result.title,
          active: true,
          parent: this.result.categorie ? this.result.categorie : null,
        }).subscribe(res => {
          console.log(res);
          this.dialogRef.close(true);
        })
      }
    } else {
      if (this.formGroup.valid) {
        this.pageService.post({
          title: this.result.title,
          active: true,
          category: this.result.categorie,
        }).subscribe(res => {
          console.log(res);
          this.dialogRef.close(true);
        })
      }
    }
  }
}
