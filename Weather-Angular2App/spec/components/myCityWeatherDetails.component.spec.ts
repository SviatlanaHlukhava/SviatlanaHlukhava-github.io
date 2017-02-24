import { Component, NO_ERRORS_SCHEMA, PipeTransform, Pipe, ChangeDetectorRef  } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DecimalPipe } from '@angular/common';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs'
import { Weather } from './../../scripts/model/Weather'
import { Coordinate } from './../../scripts/model/Coordinate'
import { MainWeather } from './../../scripts/model/MainWeather'
import { Wind } from './../../scripts/model/Wind'
import { Cloud } from './../../scripts/model/Cloud'
import { MyCityWeatherDetailsComponent } from './../../scripts/components/myCityWeatherDetails.component'
import { WeatherModule } from './../../scripts/modules/weather.module'
import { WeatherApiService } from './../../scripts/services/WeatherAPI'

@Pipe({
    name: 'number',
    pure: false // required to update the value when the promise is resolved
})
export class MockedDecimalPipe implements PipeTransform {
    name: string = 'number';

    transform(query: string): string {
        return query;
    }
}

@Component({
  template: '<my-city-weather-details [coordinate]="coordinate"></my-city-weather-details>'
})
class TestHostComponent {
    coordinate: Coordinate;
}

class MockWeatherApiService {
    getWeatherCityInfoByLocation(coordinate: Coordinate) {
        let mainWeather = new MainWeather(273, 80, 1020);
        let wind = new Wind(180, 4);
        let cloud = new Cloud(90);
        let weather = new Weather (1, 'testCity', 'testDesc', coordinate, mainWeather, wind, cloud);
        return Observable.of(weather);
    }
}

describe('MyCityWeatherDetailsComponent', () => {

    let fixture: ComponentFixture <TestHostComponent>;
    let weather: Weather;
    let coordinate: Coordinate;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ WeatherModule.forRoot()],
            declarations: [ MyCityWeatherDetailsComponent, TestHostComponent, MockedDecimalPipe ],
            schemas:      [ NO_ERRORS_SCHEMA ],
            providers:    [ WeatherApiService ]
        }).overrideComponent(MyCityWeatherDetailsComponent, {
            set: {
                providers: [
                    { provide: WeatherApiService, useClass: MockWeatherApiService}
                ]
            }
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        let comp = fixture.componentInstance;
        coordinate = new Coordinate(30, 20);
        comp.coordinate = coordinate;
        fixture.detectChanges();
        let mainWeather = new MainWeather(273, 80, 1020);
        let wind = new Wind(180, 4);
        let cloud = new Cloud(90);
        weather = new Weather (1, 'testCity', 'testDesc', coordinate, mainWeather, wind, cloud);
    })

    it('should set my city weather details', async(() => {
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            let title = fixture.nativeElement.querySelector('.title');
            expect(title.textContent).toContain(weather.getCity());
        });
    }));
});