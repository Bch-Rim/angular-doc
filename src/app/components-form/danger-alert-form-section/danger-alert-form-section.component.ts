import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-danger-alert-form-section',
  templateUrl: './danger-alert-form-section.component.html',
  styleUrls: ['./danger-alert-form-section.component.scss']
})
export class DangerAlertFormSectionComponent implements OnInit {

  constructor() { }
  @Input() section

  ngOnInit(): void {
  }

}
