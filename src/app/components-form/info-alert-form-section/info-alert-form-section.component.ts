import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-info-alert-form-section',
  templateUrl: './info-alert-form-section.component.html',
  styleUrls: ['./info-alert-form-section.component.scss']
})
export class InfoAlertFormSectionComponent implements OnInit {

  constructor() { }
  @Input() section

  ngOnInit(): void {
  }

}
