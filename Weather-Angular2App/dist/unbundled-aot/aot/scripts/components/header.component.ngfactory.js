/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../scripts/components/header.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../css/header.css.shim';
import * as import9 from '../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import10 from '@angular/common/src/pipes/number_pipe';
import * as import11 from '@angular/common/src/pipes/date_pipe';
import * as import12 from '@angular/router/src/router';
import * as import13 from '@angular/router/src/router_state';
import * as import14 from '@angular/common/src/location/location_strategy';
import * as import15 from '@angular/core/src/i18n/tokens';
import * as import16 from '@angular/router/src/directives/router_link';
export var Wrapper_HeaderComponent = (function () {
    function Wrapper_HeaderComponent() {
        this._changed = false;
        this.context = new import0.HeaderComponent();
        this._expr_0 = import1.UNINITIALIZED;
    }
    Wrapper_HeaderComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_HeaderComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_HeaderComponent.prototype.check_coordinate = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.coordinate = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_HeaderComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_HeaderComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_HeaderComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_HeaderComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_HeaderComponent;
}());
var renderType_HeaderComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_HeaderComponent_Host0 = (function (_super) {
    __extends(View_HeaderComponent_Host0, _super);
    function View_HeaderComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_HeaderComponent_Host0, renderType_HeaderComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways);
    }
    View_HeaderComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'header', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_HeaderComponent0(this.viewUtils, this, 0, this._el_0);
        this._HeaderComponent_0_3 = new Wrapper_HeaderComponent();
        this.compView_0.create(this._HeaderComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._HeaderComponent_0_3.context);
    };
    View_HeaderComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.HeaderComponent) && (0 === requestNodeIndex))) {
            return this._HeaderComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_HeaderComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._HeaderComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange)) {
            this.compView_0.markAsCheckOnce();
        }
        this.compView_0.detectChanges(throwOnChange);
    };
    View_HeaderComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_HeaderComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_HeaderComponent_Host0;
}(import2.AppView));
export var HeaderComponentNgFactory = new import7.ComponentFactory('header', View_HeaderComponent_Host0, import0.HeaderComponent);
var styles_HeaderComponent = [import8.styles];
var renderType_HeaderComponent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.Emulated, styles_HeaderComponent, {});
export var View_HeaderComponent0 = (function (_super) {
    __extends(View_HeaderComponent0, _super);
    function View_HeaderComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_HeaderComponent0, renderType_HeaderComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckOnce);
        this._expr_25 = import1.UNINITIALIZED;
        this._expr_29 = import1.UNINITIALIZED;
    }
    View_HeaderComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'header'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'links'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'logo'), null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_4, 'a', new import3.InlineArray2(2, 'routerLink', '/weather-list'), null);
        this._RouterLinkWithHref_5_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import12.Router, this.parentIndex), this.parentView.injectorGet(import13.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import14.LocationStrategy, this.parentIndex));
        this._text_6 = this.renderer.createText(this._el_5, 'Weather', null);
        this._text_7 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'back'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n            ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'a', new import3.InlineArray2(2, 'routerLink', '/map'), null);
        this._RouterLinkWithHref_10_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import12.Router, this.parentIndex), this.parentView.injectorGet(import13.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import14.LocationStrategy, this.parentIndex));
        this._text_11 = this.renderer.createText(this._el_10, 'Map', null);
        this._text_12 = this.renderer.createText(this._el_8, '\n            ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_8, 'a', new import3.InlineArray2(2, 'href', './../index.html'), null);
        this._text_14 = this.renderer.createText(this._el_13, 'To index page', null);
        this._text_15 = this.renderer.createText(this._el_8, '\n        ', null);
        this._text_16 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_17 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'position'), null);
        this._text_19 = this.renderer.createText(this._el_18, '', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_18, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_21 = this.renderer.createText(this._el_18, '', null);
        this._text_22 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_5, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_5));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_10, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_10));
        this._pipe_number_0 = new import10.DecimalPipe(this.parentView.injectorGet(import15.LOCALE_ID, this.parentIndex));
        this._pipe_number_0_0 = import3.pureProxy2(this._pipe_number_0.transform.bind(this._pipe_number_0));
        this._pipe_number_0_1 = import3.pureProxy2(this._pipe_number_0.transform.bind(this._pipe_number_0));
        this._pipe_date_1 = new import11.DatePipe(this.parentView.injectorGet(import15.LOCALE_ID, this.parentIndex));
        this._pipe_date_1_0 = import3.pureProxy2(this._pipe_date_1.transform.bind(this._pipe_date_1));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_HeaderComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.RouterLinkWithHref) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._RouterLinkWithHref_5_3.context;
        }
        if (((token === import16.RouterLinkWithHref) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._RouterLinkWithHref_10_3.context;
        }
        return notFoundResult;
    };
    View_HeaderComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new import1.ValueUnwrapper();
        var currVal_5_0_0 = '/weather-list';
        this._RouterLinkWithHref_5_3.check_routerLink(currVal_5_0_0, throwOnChange, false);
        this._RouterLinkWithHref_5_3.ngDoCheck(this, this._el_5, throwOnChange);
        var currVal_10_0_0 = '/map';
        this._RouterLinkWithHref_10_3.check_routerLink(currVal_10_0_0, throwOnChange, false);
        this._RouterLinkWithHref_10_3.ngDoCheck(this, this._el_10, throwOnChange);
        this._RouterLinkWithHref_5_3.checkHost(this, this, this._el_5, throwOnChange);
        this._RouterLinkWithHref_10_3.checkHost(this, this, this._el_10, throwOnChange);
        valUnwrapper.reset();
        var currVal_25 = import3.inlineInterpolate(2, '\n        Current position: latitude - ', valUnwrapper.unwrap(import3.castByValue(this._pipe_number_0_0, this._pipe_number_0.transform)(this.context.coordinate.getLatitude(), '1.0-2')), ', longitude - ', valUnwrapper.unwrap(import3.castByValue(this._pipe_number_0_1, this._pipe_number_0.transform)(this.context.coordinate.getLongitude(), '1.0-2')), '\n        ');
        if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange, this._expr_25, currVal_25))) {
            this.renderer.setText(this._text_19, currVal_25);
            this._expr_25 = currVal_25;
        }
        valUnwrapper.reset();
        var currVal_29 = import3.inlineInterpolate(1, '\n        Current date: ', valUnwrapper.unwrap(import3.castByValue(this._pipe_date_1_0, this._pipe_date_1.transform)(this.context.currentDate, 'dd/MM/yyyy HH:mm:ss')), '\n    ');
        if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange, this._expr_29, currVal_29))) {
            this.renderer.setText(this._text_21, currVal_29);
            this._expr_29 = currVal_29;
        }
    };
    View_HeaderComponent0.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_5_3.ngOnDestroy();
        this._RouterLinkWithHref_10_3.ngOnDestroy();
    };
    View_HeaderComponent0.prototype.handleEvent_5 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_5_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_HeaderComponent0.prototype.handleEvent_10 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_10_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_HeaderComponent0;
}(import2.AppView));
//# sourceMappingURL=header.component.ngfactory.js.map