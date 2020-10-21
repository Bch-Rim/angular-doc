import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.scss']
})
export class CategoryDialogComponent implements OnInit {

  constructor(
    private CategoryService: CategoryService,
    public dialogRef: MatDialogRef<CategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }



  formGroup: FormGroup;

  ngOnInit(): void {
    console.log("dataa", this.data)

    this.formGroup = new FormGroup({
      title: new FormControl(this.data.categorie.title, Validators.required)
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  //modify or delete category according to the action

  categoryAction() {
    if (this.data.action == 'delete') {
      this.CategoryService.delete(this.data.categorie.id).subscribe(res => {
        this.dialogRef.close(true);
      });
    } else {
      this.data.categorie.title = this.formGroup.value.title;
      this.CategoryService.update(this.data.categorie).subscribe(res => {
        this.dialogRef.close(true);
      });
    }
  }

}
