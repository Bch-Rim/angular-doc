import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-confirmation-dialog',
  templateUrl: './edit-confirmation-dialog.component.html',
  styleUrls: ['./edit-confirmation-dialog.component.scss']
})
export class EditConfirmationDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

    formGroup: FormGroup;

  onNoClick(): void {
    this.dialogRef.close();
  }

  edit() {
    this.data.title= this.formGroup.value.title;
    this.dialogRef.close(this.data);
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      title: new FormControl(this.data.title, Validators.required)
    })
  }

}
