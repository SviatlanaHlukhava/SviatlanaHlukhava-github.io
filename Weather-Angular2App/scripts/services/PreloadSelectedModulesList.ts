import { Route, PreloadingStrategy } from '@angular/router';
import { Observable } from 'rxjs'

export class PreloadSelectedModulesList implements PreloadingStrategy {
  preload(route: Route, load: Function) {
    return route.data && route.data['preload'] ? load() : Observable.of(null);
  }
}