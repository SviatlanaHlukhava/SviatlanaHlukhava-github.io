import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { App }   from './components/app.component';
import { Map }   from './components/map.component';
import { WeatherTable }   from './components/weatherTable.component';
import { Footer }   from './components/footer.component';
import { Header }   from './components/header.component';
import { Loader }   from './components/loader.component';
import { WeatherCityInfo } from './components/weatherCityInfo.component'
import { KelvinToCelsiusPipe } from './pipes/kelvinToCelsius.pipe'
import { CityWeatherPipe } from './pipes/cityWeather.pipe'

@NgModule({
    imports:      [BrowserModule, FormsModule],
    bootstrap:    [App],
    declarations: [App, Map, WeatherTable, Footer, Header, Loader, WeatherCityInfo,
      KelvinToCelsiusPipe, CityWeatherPipe]
})
export class AppModule {}