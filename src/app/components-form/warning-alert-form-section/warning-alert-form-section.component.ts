import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-warning-alert-form-section',
  templateUrl: './warning-alert-form-section.component.html',
  styleUrls: ['./warning-alert-form-section.component.scss']
})
export class WarningAlertFormSectionComponent implements OnInit {

  constructor() { }
  @Input() section

  ngOnInit(): void {
  }

}
