import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea-section',
  templateUrl: './textarea-section.component.html',
  styleUrls: ['./textarea-section.component.scss']
})
export class TextareaSectionComponent implements OnInit {

  constructor() { }
  @Input() section:any;


  ngOnInit(): void {
  }

}
