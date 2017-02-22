import { Component, Input  } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { WeatherColorDirective } from './../../scripts/directives/weatherColor.directive'
import { Weather } from './../../scripts/model/Weather'
import { MainWeather } from './../../scripts/model/MainWeather'

@Component({
  template: `
  <div weather-color [weather]="weatherCold">Something Yellow</div>
  <div weather-color [weather]="weatherWarm">Something Yellow</div>
  <div weather-color [weather]="weatherHot">Something Yellow</div>`
})
class TestComponent {
    @Input() weatherCold: Weather;
    @Input() weatherWarm: Weather;
    @Input() weatherHot: Weather;
 }

describe('WeatherColorDirective', () => {

    let fixture: ComponentFixture <TestComponent>;
    let comp: TestComponent;
    let debugElems: DebugElement[];
    beforeEach((async(() => {
        TestBed.configureTestingModule({
            declarations: [ TestComponent, WeatherColorDirective]
        }).compileComponents();
    })));
    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        let coldWeather = new MainWeather(262, 50, null);
        let warmWeather = new MainWeather(293, 50, null);
        let hotWeather = new MainWeather(310, 50, null);
        comp = fixture.componentInstance;
        comp.weatherCold = new Weather (1, 'testCity', 'testDesc', null, coldWeather, null, null);
        comp.weatherWarm = new Weather (1, 'testCity', 'testDesc', null, warmWeather, null, null);
        comp.weatherHot = new Weather (1, 'testCity', 'testDesc', null, hotWeather, null, null);
        fixture.detectChanges();
        debugElems = fixture.debugElement.queryAll(By.directive(WeatherColorDirective));
    });

    it('should return correct color', () => {
        const coldColor = debugElems[0].nativeElement.style.backgroundColor;
        expect(coldColor).toBe('rgb(129, 247, 243)');
        const warmColor = debugElems[1].nativeElement.style.backgroundColor;
        expect(warmColor).toBe('rgb(243, 247, 129)');
        const hotColor = debugElems[2].nativeElement.style.backgroundColor;
        expect(hotColor).toBe('rgb(245, 169, 169)');
    });
});