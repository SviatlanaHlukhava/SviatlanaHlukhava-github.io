import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'loader',
  templateUrl: './../../pages/templates/loader.tmpl.html',
  styleUrls: ['./../../css/loader.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {
  @Input() isLoading: boolean;
  constructor() {
  }
}