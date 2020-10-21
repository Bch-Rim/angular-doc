import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doubleimage-section',
  templateUrl: './doubleimage-section.component.html',
  styleUrls: ['./doubleimage-section.component.scss']
})
export class DoubleimageSectionComponent implements OnInit {

  constructor() { }

  @Input() section:any;
  

  ngOnInit(): void {
  }

}
