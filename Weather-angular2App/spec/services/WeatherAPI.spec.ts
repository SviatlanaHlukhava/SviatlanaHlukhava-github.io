import { TestBed, async, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { HttpModule, Http, Response, ResponseOptions, BaseRequestOptions } from '@angular/http';
import { WeatherApiService } from './../../scripts/services/WeatherAPI'
import { WeatherDTOtoWeatherConverter } from './../../scripts/services/WeatherDTOtoWeatherConverter'
import { Weather } from './../../scripts/model/Weather'
import { Coordinate } from './../../scripts/model/Coordinate'

describe('WeatherApiService', () => {

    let converter: WeatherDTOtoWeatherConverter  = new WeatherDTOtoWeatherConverter();
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                {
                    provide: Http,
                    useFactory: (mockBackend, options) => {
                        return new Http(mockBackend, options);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                },
                WeatherApiService,
                MockBackend,
                BaseRequestOptions,
                {
                    provide: WeatherDTOtoWeatherConverter,
                    useValue: converter
                }
            ]
        });
    });

    const mockResponseOneWeatherSuccess = {
          coord: { lon: 30.36, lat: 53.95 }, weather: [{ id: 701, main: "Mist", description: "mist", icon: "50d" }],
          base: "stations", main: { temp: 271.15, pressure: 1026, humidity: 92, temp_min: 271.15, temp_max: 271.15 }, visibility: 4200,
          wind: { speed: 5, deg: 260 }, clouds: { all: 90 }, dt: 1482055200, sys: { type: 1, id: 7379, message: 0.311, country: "BY",
          sunrise: 1482041631, sunset: 1482068232 }, id: 627631, name: "Karabanovka", cod: 200
    };
    function checkOneWeatherSuccess(weather: Weather) {
          expect(weather.getCity()).toBe("Karabanovka");
          expect(weather.getDescription()).toBe("mist");
          expect(weather.getCoordinate().getLatitude()).toBe(53.95);
          expect(weather.getCoordinate().getLongitude()).toBe(30.36);
          expect(weather.getMainParams().getTemperature()).toBe(271.15);
          expect(weather.getMainParams().getHumidity()).toBe(92);
          expect(weather.getMainParams().getPressure()).toBe(1026);
          expect(weather.getWind().getSpeed()).toBe(5);
          expect(weather.getWind().getDegree()).toBe(260);
          expect(weather.getCloud().getAll()).toBe(90);
    }

    it('should return weather list', async(inject([WeatherApiService, MockBackend], (weatherApiService: WeatherApiService, mockBackend: MockBackend) => {
        const mockResponse = {
            list: [
                {
                    coord: { lon: 30.36, lat: 53.95 }, weather: [{ id: 701, main: "Mist", description: "mist", icon: "50d" }], base: "stations",
                    main: { temp: 271.15, pressure: 1026, humidity: 92, temp_min: 271.15, temp_max: 271.15 }, visibility: 4200,
                    wind: { speed: 5, deg: 260 }, clouds: { all: 90 }, dt: 1482055200, sys: { type: 1, id: 7379, message: 0.311, country: "BY",
                    sunrise: 1482041631, sunset: 1482068232 }, id: 627631, name: "Karabanovka", cod: 200
                },
                {
                    coord: { lon: 30.34, lat: 53.91 }, weather: [{ id: 701, main: "Mist", description: "mist", icon: "50d" }], base: "stations",
                    main: { temp: 271.15, pressure: 1026, humidity: 92, temp_min: 271.15, temp_max: 271.15 }, visibility: 3000,
                    wind: { speed: 4, deg: 260 }, clouds: { all: 90 }, dt: 1482051600, sys: { type: 1, id: 7379, message: 0.0146, country: "BY",
                    sunrise: 1482041621, sunset: 1482068251 }, id: 625665, name: "Mahilyow", cod: 200
                }
            ]
        };
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
        let num = 0;
        weatherApiService.getWeatherList(53.95, 30.36).subscribe((weather: Weather) => {
            if (num === 0) {
                checkOneWeatherSuccess(weather);
                num++;
            } else {
                expect(weather.getCity()).toBe("Mahilyow");
                expect(weather.getDescription()).toBe("mist");
                expect(weather.getCoordinate().getLatitude()).toBe(53.91);
                expect(weather.getCoordinate().getLongitude()).toBe(30.34);
                expect(weather.getMainParams().getTemperature()).toBe(271.15);
                expect(weather.getMainParams().getHumidity()).toBe(92);
                expect(weather.getMainParams().getPressure()).toBe(1026);
                expect(weather.getWind().getSpeed()).toBe(4);
                expect(weather.getWind().getDegree()).toBe(260);
                expect(weather.getCloud().getAll()).toBe(90);
            }
        });
    })));

    it('could return error getting weather list', async(inject([WeatherApiService, MockBackend], (weatherApiService: WeatherApiService, mockBackend: MockBackend) => {
        mockBackend.connections.subscribe((connection) => {
          connection.mockError(new Response(new ResponseOptions({
            status: 502
          })));
        });
        weatherApiService.getWeatherList(53.95, 30.36).subscribe(() => {
            fail('expected error');
        },
        (error) => {
            expect(error).toBe('Weather list is not loaded');
        });
    })));

    it('should return weather info by city', async(inject([WeatherApiService, MockBackend], (weatherApiService: WeatherApiService, mockBackend: MockBackend) => {
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponseOneWeatherSuccess)
          })));
        });
        weatherApiService.getWeatherCityInfo("Karabanovka", false).subscribe((weather: Weather) => {
            checkOneWeatherSuccess(weather);
        });
    })));

    it('should return weather info by id', async(inject([WeatherApiService, MockBackend], (weatherApiService: WeatherApiService, mockBackend: MockBackend) => {
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponseOneWeatherSuccess)
          })));
        });
        weatherApiService.getWeatherCityInfoById(627631).subscribe((weather: Weather) => {
            checkOneWeatherSuccess(weather);
        });
    })));

    it('could return error getting weather info by id', async(inject([WeatherApiService, MockBackend], (weatherApiService: WeatherApiService, mockBackend: MockBackend) => {
        mockBackend.connections.subscribe((connection) => {
          connection.mockError(new Response(new ResponseOptions({
            status: 404
          })));
        });
        weatherApiService.getWeatherCityInfoById(-627631).subscribe(() => {
            fail('expected error');
        },
        (error) => {
            expect(error).toBe('Weather Details is not loaded');
        });
    })));

    it('should return weather info by location', async(inject([WeatherApiService, MockBackend], (weatherApiService: WeatherApiService, mockBackend: MockBackend) => {
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponseOneWeatherSuccess)
          })));
        });
        weatherApiService.getWeatherCityInfoByLocation(new Coordinate(53.95, 30.36)).subscribe((weather: Weather) => {
            checkOneWeatherSuccess(weather);
        });
    })));
});