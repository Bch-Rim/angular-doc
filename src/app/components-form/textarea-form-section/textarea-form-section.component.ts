import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textarea-form-section',
  templateUrl: './textarea-form-section.component.html',
  styleUrls: ['./textarea-form-section.component.scss']
})
export class TextareaFormSectionComponent implements OnInit {

  constructor() { }

  @Input() section

  ngOnInit(): void {
  }

}
