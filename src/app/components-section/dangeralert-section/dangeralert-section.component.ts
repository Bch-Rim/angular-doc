import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dangeralert-section',
  templateUrl: './dangeralert-section.component.html',
  styleUrls: ['./dangeralert-section.component.scss']
})
export class DangeralertSectionComponent implements OnInit {

  constructor() { }

  @Input() section:any;


  ngOnInit(): void {
  }

}
