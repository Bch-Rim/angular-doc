import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-section',
  templateUrl: './image-section.component.html',
  styleUrls: ['./image-section.component.scss']
})
export class ImageSectionComponent implements OnInit {

  constructor() { }
  @Input() section:any;

  
  ngOnInit(): void {
  }

}
