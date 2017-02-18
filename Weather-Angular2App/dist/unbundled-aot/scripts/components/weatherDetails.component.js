import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
export var WeatherDetailsComponent = (function () {
    function WeatherDetailsComponent(route) {
        this.route = route;
    }
    WeatherDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.weather = data.weather;
        });
    };
    WeatherDetailsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'weather-details',
                    templateUrl: './../../pages/templates/weatherDetails.tmpl.html',
                    styleUrls: ['./../../css/weatherDetails.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    WeatherDetailsComponent.ctorParameters = [
        { type: ActivatedRoute, },
    ];
    return WeatherDetailsComponent;
}());
//# sourceMappingURL=weatherDetails.component.js.map