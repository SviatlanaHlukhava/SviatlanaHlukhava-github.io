import { Component, Input } from '@angular/core';

@Component({
  selector: 'loader',
  templateUrl: 'pages/templates/loader.tmpl.html',
  styleUrls: ['css/loader.css']
})
export class Loader {
  @Input() isLoading: boolean;
  constructor() {
  }
}