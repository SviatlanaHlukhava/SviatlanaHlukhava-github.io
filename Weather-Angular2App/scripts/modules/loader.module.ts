import { NgModule }       from '@angular/core';
import { SharedModule } from './shared.module'
import { LoaderComponent }   from './../components/loader.component';

@NgModule({
    imports: [SharedModule],
    declarations: [LoaderComponent],
    exports: [LoaderComponent]
})
export class LoaderModule {}