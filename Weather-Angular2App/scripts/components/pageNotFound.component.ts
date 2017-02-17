import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs'

@Component({
  selector: 'page-not-found',
  template: '<div class="not-found">Page not found</div>',
  styleUrls: ['./../../css/pageNotFound.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNotFoundComponent {
}