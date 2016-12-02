import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  template: '<div class="footer">Copyright &copy; {{year}}. All rights reserved</div>',
  styleUrls: ['./../../css/footer.css']
})
export class Footer {
  year: number;
  constructor() {
      this.year = new Date().getFullYear();
  }
}