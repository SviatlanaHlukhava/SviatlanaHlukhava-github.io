import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { App }   from './components/app.component';
import { Map }   from './components/map.component';
import { WeatherTable }   from './components/weatherTable.component';
import { Footer }   from './components/footer.component';
import { Header }   from './components/header.component';

@NgModule({
    imports:      [BrowserModule],
    bootstrap:    [App],
    declarations: [App, Map, WeatherTable, Footer, Header],
})
export class AppModule {}