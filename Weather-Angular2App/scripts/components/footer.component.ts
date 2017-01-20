import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'footer',
  template: '<div class="footer">Copyright &copy; {{year}}. All rights reserved</div>',
  styleUrls: ['./../../css/footer.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  year: number;
  constructor() {
      this.year = new Date().getFullYear();
  }
}