import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CodeModel } from '@ngstack/code-editor';

@Component({
  selector: 'app-code-form-section',
  templateUrl: './code-form-section.component.html',
  styleUrls: ['./code-form-section.component.scss']
})
export class CodeFormSectionComponent implements OnInit {

  constructor() { }
  languages = [
    { name: 'html' },
    { name: 'css' },
    { name: 'js' },
    { name: 'json' },
  ];

  @Input() section
  theme = 'vs-dark';

  codeModel: CodeModel = {
    language: '',
    uri: 'main.html',
    value: ''
  };

  options = {
    contextmenu: true,
    minimap: {
      enabled: true,
    },
  };

  onCodeChanged(value) {
    console.log(value);
    this.section.json_content.codecontent = value;

  }
  ngOnInit(): void {
    this.codeModel.value = this.codeModel.value;
    this.codeModel.language = this.section.json_content.language;
    this.codeModel.uri = this.section.id + this.codeModel.uri;
  }
}
