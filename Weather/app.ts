/// <reference path="./typings/googlemaps/google.maps.d.ts" />

import './css/style.css';
import { WeatherCitiesLoader } from './scripts/WeatherCitiesLoader';
let weatherCitiesLoader = new WeatherCitiesLoader();
weatherCitiesLoader.loadCities();

function showMap() {
    let mapCanvas = document.getElementById("map");
    let mapOptions = {
        center: new google.maps.LatLng(51.508742, -0.120850),
        zoom: 5
    };
    let map = new google.maps.Map(mapCanvas, mapOptions);
}

showMap();