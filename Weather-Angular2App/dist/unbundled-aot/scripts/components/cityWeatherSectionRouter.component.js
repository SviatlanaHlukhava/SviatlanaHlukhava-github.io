import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
export var CityWeatherSectionRouterComponent = (function () {
    function CityWeatherSectionRouterComponent(store) {
        this.store = store;
        this.coordinate = this.store.select("coordinate");
    }
    CityWeatherSectionRouterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'city-weather-section-router',
                    template: '<city-weather-section [coordinate]="coordinate | async"></city-weather-section>',
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    CityWeatherSectionRouterComponent.ctorParameters = [
        { type: Store, },
    ];
    return CityWeatherSectionRouterComponent;
}());
//# sourceMappingURL=cityWeatherSectionRouter.component.js.map