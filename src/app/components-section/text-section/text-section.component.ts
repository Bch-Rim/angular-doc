import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { PageComponent } from '../../page/page.component'
@Component({
  selector: 'app-text-section',
  templateUrl: './text-section.component.html',
  styleUrls: ['./text-section.component.scss']
})
export class TextSectionComponent implements OnInit {

  constructor() { }

  @Input() section:any;


  ngOnInit(): void {
    
  }

}
