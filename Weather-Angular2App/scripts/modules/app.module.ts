import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }   from './../components/app.component';
import { MapModule }   from './map.module';
import { WeatherModule }   from './weather.module';
import { FooterModule }   from './footer.module';
import { HeaderModule }   from './header.module';
import { LoaderModule }   from './loader.module';
import { Profiler } from './../services/Profiler'
import { LocationService } from './../services/Location'
import { LoggerService } from './../services/Logger'

@NgModule({
    imports:      [BrowserModule, FormsModule, FooterModule, HeaderModule, LoaderModule, MapModule, WeatherModule],
    bootstrap:    [AppComponent],
    declarations: [AppComponent],
    providers: [Profiler, LocationService, LoggerService]
})
export class AppModule {}