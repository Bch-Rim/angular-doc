import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-richtext-form-section',
  templateUrl: './richtext-form-section.component.html',
  styleUrls: ['./richtext-form-section.component.scss'],
  template: `<ejs-richtexteditor id='iframeRTE' [toolbarSettings]='tools'>
  </ejs-richtexteditor>`,
providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService]

})
export class RichtextFormSectionComponent implements OnInit {

  constructor() { }
  @Input() section
  
  
  public tools: object = {
    items: ['CreateTable','Bold', 'Italic', 'Underline', 'StrikeThrough',
    'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
    'LowerCase', 'UpperCase', '|',
    'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
    'Outdent', 'Indent', '|',
    'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
    'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
};

  ngOnInit(): void {
  }

}


