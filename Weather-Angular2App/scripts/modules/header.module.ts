import { NgModule }       from '@angular/core';
import { SharedModule } from './shared.module'
import { RouterModule } from '@angular/router';
import { HeaderComponent }   from './../components/header.component';

@NgModule({
    imports: [SharedModule, RouterModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})
export class HeaderModule {}