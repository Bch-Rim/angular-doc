import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { SectionService } from 'src/app/services/section.service';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';
import { CodeModel } from '@ngstack/code-editor';

@Component({
  selector: 'app-add-section-dialog',
  templateUrl: './add-section-dialog.component.html',
  styleUrls: ['./add-section-dialog.component.scss'],
  template: `<ejs-richtexteditor id='iframeRTE' [toolbarSettings]='tools'>
  </ejs-richtexteditor>`,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService]

})
export class AddSectionDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddSectionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addSection() {
    this.dialogRef.close(this.data);
  }
  ngOnInit(): void {

  }
}
