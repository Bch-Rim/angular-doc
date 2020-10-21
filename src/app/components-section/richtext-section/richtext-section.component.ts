import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-richtext-section',
  templateUrl: './richtext-section.component.html',
  styleUrls: ['./richtext-section.component.scss']
})
export class RichtextSectionComponent implements OnInit {

  constructor() { }

  @Input() section:any;

  ngOnInit(): void {
  }

}
