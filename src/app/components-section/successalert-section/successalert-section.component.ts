import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-successalert-section',
  templateUrl: './successalert-section.component.html',
  styleUrls: ['./successalert-section.component.scss']
})
export class SuccessalertSectionComponent implements OnInit {

  constructor() { }
  @Input() section;
  
  ngOnInit(): void {
    
  }

}
