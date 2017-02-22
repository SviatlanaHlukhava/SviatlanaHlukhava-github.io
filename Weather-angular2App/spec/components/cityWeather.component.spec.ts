import { Component, NO_ERRORS_SCHEMA, PipeTransform, Pipe  } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DecimalPipe } from '@angular/common';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Weather } from './../../scripts/model/Weather'
import { Coordinate } from './../../scripts/model/Coordinate'
import { MainWeather } from './../../scripts/model/MainWeather'
import { Wind } from './../../scripts/model/Wind'
import { Cloud } from './../../scripts/model/Cloud'
import { CityWeatherComponent } from './../../scripts/components/cityWeather.component'
import { TableParameters } from './../../scripts/model/TableParameters'
import { WeatherModule } from './../../scripts/modules/weather.module'

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

describe('CityWeatherComponent', () => {

    let fixture: ComponentFixture <CityWeatherComponent>;
    let comp: CityWeatherComponent;
    let buttons: DebugElement[];
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ WeatherModule.forRoot()],
            declarations: [ CityWeatherComponent, MockedDecimalPipe ],
            schemas:      [ NO_ERRORS_SCHEMA ]
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CityWeatherComponent);
        comp = fixture.componentInstance;
        let params = [
          "Overall conditions",
          "Temperature",
          "Humidity",
          "Pressure",
          "Wind",
          "Clouds"
        ];
        comp.tableParameters = new TableParameters(params, true, 2);
        let coordinate = new Coordinate(30, 20);
        let mainWeather = new MainWeather(273, 80, 1020);
        let wind = new Wind(180, 4);
        let cloud = new Cloud(90);
        comp.weather = new Weather (1, 'testCity', 'testDesc', coordinate, mainWeather, wind, cloud);
        comp.index = 3;
        buttons = fixture.debugElement.queryAll(By.css('button'));
        fixture.detectChanges();
    });

    it('should emit select emitter', () => {
        let selectedIndex: number;
        comp.selectNotify.subscribe((index: number) => selectedIndex = index);
        buttons[1].triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(selectedIndex).toBe(3);
    });
    it('should emit delete emitter', () => {
        let selectedIndex: number;
        comp.deleteNotify.subscribe((index: number) => selectedIndex = index);
        buttons[0].triggerEventHandler('click', null);
        expect(selectedIndex).toBe(3);
    });
});