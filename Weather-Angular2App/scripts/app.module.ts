import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { App }   from './components/app.component';
import { Map }   from './components/map.component';
import { WeatherTable }   from './components/weatherTable.component';
import { Footer }   from './components/footer.component';
import { Header }   from './components/header.component';
import { Loader }   from './components/loader.component';
import { KelvinToCelsiusPipe } from './pipes/kelvinToCelsius.pipe'

@NgModule({
    imports:      [BrowserModule],
    bootstrap:    [App],
    declarations: [App, Map, WeatherTable, Footer, Header, Loader, KelvinToCelsiusPipe],
})
export class AppModule {}