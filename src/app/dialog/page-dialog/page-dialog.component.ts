import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-page-dialog',
  templateUrl: './page-dialog.component.html',
  styleUrls: ['./page-dialog.component.scss']
})
export class PageDialogComponent implements OnInit {

  constructor(
    private PageService: PageService,
    public dialogRef: MatDialogRef<PageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

    formGroup = new FormGroup({
       title : new FormControl(this.data.page?.title , Validators.required)  
     })

    // formGroup: FormGroup;

  ngOnInit(): void {
    //  this.formGroup= new FormGroup({
    //    title : new FormControl(this.data.page.title , Validators.required)  
    //  })
    console.log("dataaaa", this.data)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


//modify or delete page according to the action

pageAction() {
  if(this.data.action=='delete'){
    this.PageService.delete(this.data.page.id).subscribe(res =>{
      this.dialogRef.close(true);
    });
  }else if((this.data.action=='edit')) {
    this.data.page.title = this.formGroup.value.title;
    this.PageService.update(this.data.page).subscribe(res =>{
      this.dialogRef.close(true);
    });
  }
}
}
