import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-form-section',
  templateUrl: './text-form-section.component.html',
  styleUrls: ['./text-form-section.component.scss']
})
export class TextFormSectionComponent implements OnInit {

  constructor() { }
  @Input() section

  ngOnInit(): void {
  }

}
