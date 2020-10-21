import { Component, Input, OnInit } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'app-code-section',
  templateUrl: './code-section.component.html',
  styleUrls: ['./code-section.component.scss']
})
export class CodeSectionComponent implements OnInit {

  constructor() { }

  @Input() section:any;
 

  ngOnInit(): void {
    
  }

}
