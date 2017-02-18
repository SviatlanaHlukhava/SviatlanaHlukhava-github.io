import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
export var MyCityWeatherDetailsRouterComponent = (function () {
    function MyCityWeatherDetailsRouterComponent(store) {
        this.store = store;
        this.coordinate = this.store.select("coordinate");
    }
    MyCityWeatherDetailsRouterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-city-weather-details-router',
                    template: '<my-city-weather-details [coordinate]="coordinate | async"></my-city-weather-details>',
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    MyCityWeatherDetailsRouterComponent.ctorParameters = [
        { type: Store, },
    ];
    return MyCityWeatherDetailsRouterComponent;
}());
//# sourceMappingURL=myCityWeatherDetailsRouter.component.js.map