import { Weather }  from './Weather'
export interface IWeatherRowsPrinter {
    printWeatherTable(list: Weather[]): void;   
}