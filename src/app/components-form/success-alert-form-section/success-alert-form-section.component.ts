import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-success-alert-form-section',
  templateUrl: './success-alert-form-section.component.html',
  styleUrls: ['./success-alert-form-section.component.scss']
})
export class SuccessAlertFormSectionComponent implements OnInit {

  constructor() { }

  @Input() section

  ngOnInit(): void {
  }

}
