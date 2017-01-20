import { Component, Input, OnChanges, OnInit, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'map',
  template: '<div id="map" class="google-map"></div>',
  styles: ['.google-map {width: 100%; height: 500px}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnInit, OnChanges {
  @Input() latitude: number;
  @Input() longitude: number;
  map: google.maps.Map;
  constructor() {
  }
  ngOnInit(): void {
    let mapCanvas = document.getElementById("map");
    let mapOptions = {
      center: new google.maps.LatLng(this.latitude, this.longitude),
      zoom: 8
    };
    this.map = new google.maps.Map(mapCanvas, mapOptions);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.map) {
      this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
    }
  }
}