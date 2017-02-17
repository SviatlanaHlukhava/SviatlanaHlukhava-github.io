import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
export var MapRouterComponent = (function () {
    function MapRouterComponent(store) {
        this.store = store;
        this.coordinate = this.store.select("coordinate");
    }
    MapRouterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'map-router',
                    template: '<map [coordinate]="coordinate | async"></map>',
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    MapRouterComponent.ctorParameters = [
        { type: Store, },
    ];
    return MapRouterComponent;
}());
//# sourceMappingURL=mapRouter.component.js.map