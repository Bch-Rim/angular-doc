import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-warningalert-section',
  templateUrl: './warningalert-section.component.html',
  styleUrls: ['./warningalert-section.component.scss']
})
export class WarningalertSectionComponent implements OnInit {

  constructor() { }
  @Input() section:any;

  ngOnInit(): void {
  }

}
