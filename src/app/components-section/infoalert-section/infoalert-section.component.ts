import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-infoalert-section',
  templateUrl: './infoalert-section.component.html',
  styleUrls: ['./infoalert-section.component.scss']
})
export class InfoalertSectionComponent implements OnInit {

  constructor() { }
  @Input() section:any;

  ngOnInit(): void {
  }

}
