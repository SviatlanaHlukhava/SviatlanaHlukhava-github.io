import { NgModule }       from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared.module'
import { MapComponent }   from './../components/map.component';
import { MapRouterComponent }   from './../components/mapRouter.component';

const mapRoutes: Routes = [
  { path: 'map', component: MapRouterComponent }
];

@NgModule({
    imports: [SharedModule, RouterModule.forChild(mapRoutes)],
    declarations: [MapComponent, MapRouterComponent],
    exports: [MapRouterComponent]
})
export class MapModule {}