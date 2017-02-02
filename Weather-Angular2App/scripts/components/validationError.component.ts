import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'validation-error',
  template: '<span class="error-message">{{message}}</span>',
  styles: ['.error-message {color: red; font-style: italic }'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValidationErrorComponent {
  @Input() message: string;
  constructor() {
  }
}