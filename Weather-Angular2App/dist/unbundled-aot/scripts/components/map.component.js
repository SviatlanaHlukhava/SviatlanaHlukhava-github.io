import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export var MapComponent = (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
        var mapCanvas = document.getElementById("map");
        var mapOptions = {
            center: new google.maps.LatLng(this.latitude, this.longitude),
            zoom: 8
        };
        this.map = new google.maps.Map(mapCanvas, mapOptions);
    };
    MapComponent.prototype.ngOnChanges = function (changes) {
        if (this.map) {
            this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
        }
    };
    MapComponent.decorators = [
        { type: Component, args: [{
                    selector: 'map',
                    template: '<div id="map" class="google-map"></div>',
                    styles: ['.google-map {width: 100%; height: 500px}'],
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    MapComponent.ctorParameters = [];
    MapComponent.propDecorators = {
        'latitude': [{ type: Input },],
        'longitude': [{ type: Input },],
    };
    return MapComponent;
}());
//# sourceMappingURL=map.component.js.map