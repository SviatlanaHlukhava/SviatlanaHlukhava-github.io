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
import * as import0 from '../../../scripts/components/tableForm.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/forms/src/form_builder';
import * as import9 from '../../css/tableForm.css.shim';
import * as import10 from '../../css/weatherTable.css.shim';
import * as import11 from '../../node_modules/@angular/forms/src/directives/reactive_directives/form_group_directive.ngfactory';
import * as import12 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import13 from '../../../scripts/components/multiselect.component';
import * as import14 from './multiselect.component.ngfactory';
import * as import15 from '../../node_modules/@angular/forms/src/directives/reactive_directives/form_control_name.ngfactory';
import * as import16 from '../../node_modules/@angular/forms/src/directives/checkbox_value_accessor.ngfactory';
import * as import17 from '../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import18 from '../../node_modules/@angular/forms/src/directives/number_value_accessor.ngfactory';
import * as import19 from '@angular/core/src/linker/view_container';
import * as import20 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from '@angular/core/src/linker/template_ref';
import * as import23 from '@angular/forms/src/directives/control_value_accessor';
import * as import24 from '@angular/forms/src/directives/reactive_directives/form_control_name';
import * as import25 from '@angular/forms/src/directives/ng_control';
import * as import26 from '@angular/forms/src/directives/ng_control_status';
import * as import27 from '@angular/forms/src/directives/checkbox_value_accessor';
import * as import28 from '@angular/forms/src/directives/default_value_accessor';
import * as import29 from '@angular/forms/src/directives/number_value_accessor';
import * as import30 from '@angular/common/src/directives/ng_if';
import * as import31 from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import * as import32 from '@angular/forms/src/directives/control_container';
import * as import33 from '../../../scripts/components/validationError.component';
import * as import34 from './validationError.component.ngfactory';
export var Wrapper_TableFormComponent = (function () {
    function Wrapper_TableFormComponent(p0) {
        this._changed = false;
        this.context = new import0.TableFormComponent(p0);
    }
    Wrapper_TableFormComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_TableFormComponent.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
    };
    Wrapper_TableFormComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_TableFormComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_TableFormComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_TableFormComponent.prototype.subscribe = function (view, _eventHandler, emit0) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.submitParametersNotify.subscribe(_eventHandler.bind(view, 'submitParametersNotify')));
        }
    };
    return Wrapper_TableFormComponent;
}());
var renderType_TableFormComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_TableFormComponent_Host0 = (function (_super) {
    __extends(View_TableFormComponent_Host0, _super);
    function View_TableFormComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_TableFormComponent_Host0, renderType_TableFormComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_TableFormComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'table-form', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_TableFormComponent0(this.viewUtils, this, 0, this._el_0);
        this._TableFormComponent_0_3 = new Wrapper_TableFormComponent(this.injectorGet(import8.FormBuilder, this.parentIndex));
        this.compView_0.create(this._TableFormComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._TableFormComponent_0_3.context);
    };
    View_TableFormComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.TableFormComponent) && (0 === requestNodeIndex))) {
            return this._TableFormComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_TableFormComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._TableFormComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange)) {
            this.compView_0.markAsCheckOnce();
        }
        this.compView_0.detectChanges(throwOnChange);
    };
    View_TableFormComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._TableFormComponent_0_3.ngOnDestroy();
    };
    View_TableFormComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_TableFormComponent_Host0;
}(import1.AppView));
export var TableFormComponentNgFactory = new import7.ComponentFactory('table-form', View_TableFormComponent_Host0, import0.TableFormComponent);
var styles_TableFormComponent = [
    import9.styles,
    import10.styles
];
var renderType_TableFormComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_TableFormComponent, {});
export var View_TableFormComponent0 = (function (_super) {
    __extends(View_TableFormComponent0, _super);
    function View_TableFormComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_TableFormComponent0, renderType_TableFormComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckOnce);
        this._expr_54 = import6.UNINITIALIZED;
    }
    View_TableFormComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'form', new import3.InlineArray2(2, 'class', 'table-form'), null);
        this._FormGroupDirective_0_3 = new import11.Wrapper_FormGroupDirective(null, null);
        this._ControlContainer_0_4 = this._FormGroupDirective_0_3.context;
        this._NgControlStatusGroup_0_5 = new import12.Wrapper_NgControlStatusGroup(this._ControlContainer_0_4);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'form-row'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'label', new import3.InlineArray2(2, 'class', 'form-cell'), null);
        this._text_5 = this.renderer.createText(this._el_4, 'Weather parameters', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_2, 'multiselect', new import3.InlineArray4(4, 'class', 'form-cell', 'formControlName', 'selectedOptions'), null);
        this.compView_7 = new import14.View_MultiselectControlComponent0(this.viewUtils, this, 7, this._el_7);
        this._MultiselectControlComponent_7_3 = new import14.Wrapper_MultiselectControlComponent();
        this._NG_VALUE_ACCESSOR_7_4 = [this._MultiselectControlComponent_7_3.context];
        this._FormControlName_7_5 = new import15.Wrapper_FormControlName(this._ControlContainer_0_4, null, null, this._NG_VALUE_ACCESSOR_7_4);
        this._NgControl_7_6 = this._FormControlName_7_5.context;
        this._NgControlStatus_7_7 = new import12.Wrapper_NgControlStatus(this._NgControl_7_6);
        this._text_8 = this.renderer.createText(null, '\n        ', null);
        this.compView_7.create(this._MultiselectControlComponent_7_3.context);
        this._text_9 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_0, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_11 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'form-row'), null);
        this._text_13 = this.renderer.createText(this._el_12, '\n        ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_12, 'input', new import3.InlineArray8(8, 'class', 'form-row', 'formControlName', 'showCoordinate', 'name', 'showCoordinate', 'type', 'checkbox'), null);
        this._CheckboxControlValueAccessor_14_3 = new import16.Wrapper_CheckboxControlValueAccessor(this.renderer, new import21.ElementRef(this._el_14));
        this._NG_VALUE_ACCESSOR_14_4 = [this._CheckboxControlValueAccessor_14_3.context];
        this._FormControlName_14_5 = new import15.Wrapper_FormControlName(this._ControlContainer_0_4, null, null, this._NG_VALUE_ACCESSOR_14_4);
        this._NgControl_14_6 = this._FormControlName_14_5.context;
        this._NgControlStatus_14_7 = new import12.Wrapper_NgControlStatus(this._NgControl_14_6);
        this._text_15 = this.renderer.createText(this._el_12, 'Show Coordinate\n    ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_0, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_17 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'form-row'), null);
        this._text_19 = this.renderer.createText(this._el_18, '\n        ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_18, 'label', new import3.InlineArray2(2, 'class', 'form-cell'), null);
        this._text_21 = this.renderer.createText(this._el_20, 'Coordinate Precision', null);
        this._text_22 = this.renderer.createText(this._el_18, '\n        ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_18, 'input', new import3.InlineArray8(8, 'class', 'form-cell', 'formControlName', 'precision', 'name', 'precision', 'type', 'number'), null);
        this._DefaultValueAccessor_23_3 = new import17.Wrapper_DefaultValueAccessor(this.renderer, new import21.ElementRef(this._el_23));
        this._NumberValueAccessor_23_4 = new import18.Wrapper_NumberValueAccessor(this.renderer, new import21.ElementRef(this._el_23));
        this._NG_VALUE_ACCESSOR_23_5 = [
            this._DefaultValueAccessor_23_3.context,
            this._NumberValueAccessor_23_4.context
        ];
        this._FormControlName_23_6 = new import15.Wrapper_FormControlName(this._ControlContainer_0_4, null, null, this._NG_VALUE_ACCESSOR_23_5);
        this._NgControl_23_7 = this._FormControlName_23_6.context;
        this._NgControlStatus_23_8 = new import12.Wrapper_NgControlStatus(this._NgControl_23_7);
        this._text_24 = this.renderer.createText(this._el_18, '\n    ', null);
        this._text_25 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_26 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_26 = new import19.ViewContainer(26, 0, this, this._anchor_26);
        this._TemplateRef_26_5 = new import22.TemplateRef_(this, 26, this._anchor_26);
        this._NgIf_26_6 = new import20.Wrapper_NgIf(this._vc_26.vcRef, this._TemplateRef_26_5);
        this._text_27 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_0, 'button', new import3.InlineArray2(2, 'class', 'form-row'), null);
        this._text_29 = this.renderer.createText(this._el_28, 'Submit', null);
        this._text_30 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray4(4, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_0));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_14, new import3.InlineArray4(4, 'change', null, 'blur', null), this.eventHandler(this.handleEvent_14));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_23, new import3.InlineArray8(6, 'input', null, 'blur', null, 'change', null), this.eventHandler(this.handleEvent_23));
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_28, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_28));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._anchor_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._text_30
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ]);
        return null;
    };
    View_TableFormComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.MultiselectControlComponent) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._MultiselectControlComponent_7_3.context;
        }
        if (((token === import23.NG_VALUE_ACCESSOR) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._NG_VALUE_ACCESSOR_7_4;
        }
        if (((token === import24.FormControlName) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._FormControlName_7_5.context;
        }
        if (((token === import25.NgControl) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._NgControl_7_6;
        }
        if (((token === import26.NgControlStatus) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._NgControlStatus_7_7.context;
        }
        if (((token === import27.CheckboxControlValueAccessor) && (14 === requestNodeIndex))) {
            return this._CheckboxControlValueAccessor_14_3.context;
        }
        if (((token === import23.NG_VALUE_ACCESSOR) && (14 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_14_4;
        }
        if (((token === import24.FormControlName) && (14 === requestNodeIndex))) {
            return this._FormControlName_14_5.context;
        }
        if (((token === import25.NgControl) && (14 === requestNodeIndex))) {
            return this._NgControl_14_6;
        }
        if (((token === import26.NgControlStatus) && (14 === requestNodeIndex))) {
            return this._NgControlStatus_14_7.context;
        }
        if (((token === import28.DefaultValueAccessor) && (23 === requestNodeIndex))) {
            return this._DefaultValueAccessor_23_3.context;
        }
        if (((token === import29.NumberValueAccessor) && (23 === requestNodeIndex))) {
            return this._NumberValueAccessor_23_4.context;
        }
        if (((token === import23.NG_VALUE_ACCESSOR) && (23 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_23_5;
        }
        if (((token === import24.FormControlName) && (23 === requestNodeIndex))) {
            return this._FormControlName_23_6.context;
        }
        if (((token === import25.NgControl) && (23 === requestNodeIndex))) {
            return this._NgControl_23_7;
        }
        if (((token === import26.NgControlStatus) && (23 === requestNodeIndex))) {
            return this._NgControlStatus_23_8.context;
        }
        if (((token === import22.TemplateRef) && (26 === requestNodeIndex))) {
            return this._TemplateRef_26_5;
        }
        if (((token === import30.NgIf) && (26 === requestNodeIndex))) {
            return this._NgIf_26_6.context;
        }
        if (((token === import31.FormGroupDirective) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._FormGroupDirective_0_3.context;
        }
        if (((token === import32.ControlContainer) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._ControlContainer_0_4;
        }
        if (((token === import26.NgControlStatusGroup) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._NgControlStatusGroup_0_5.context;
        }
        return notFoundResult;
    };
    View_TableFormComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.form;
        this._FormGroupDirective_0_3.check_form(currVal_0_0_0, throwOnChange, false);
        this._FormGroupDirective_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this._NgControlStatusGroup_0_5.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_7_0_0 = this.context.options;
        this._MultiselectControlComponent_7_3.check_selectedOptions(currVal_7_0_0, throwOnChange, false);
        if (this._MultiselectControlComponent_7_3.ngDoCheck(this, this._el_7, throwOnChange)) {
            this.compView_7.markAsCheckOnce();
        }
        var currVal_7_1_0 = 'selectedOptions';
        this._FormControlName_7_5.check_name(currVal_7_1_0, throwOnChange, false);
        this._FormControlName_7_5.ngDoCheck(this, this._el_7, throwOnChange);
        this._NgControlStatus_7_7.ngDoCheck(this, this._el_7, throwOnChange);
        this._CheckboxControlValueAccessor_14_3.ngDoCheck(this, this._el_14, throwOnChange);
        var currVal_14_1_0 = 'showCoordinate';
        this._FormControlName_14_5.check_name(currVal_14_1_0, throwOnChange, false);
        this._FormControlName_14_5.ngDoCheck(this, this._el_14, throwOnChange);
        this._NgControlStatus_14_7.ngDoCheck(this, this._el_14, throwOnChange);
        this._DefaultValueAccessor_23_3.ngDoCheck(this, this._el_23, throwOnChange);
        this._NumberValueAccessor_23_4.ngDoCheck(this, this._el_23, throwOnChange);
        var currVal_23_2_0 = 'precision';
        this._FormControlName_23_6.check_name(currVal_23_2_0, throwOnChange, false);
        this._FormControlName_23_6.ngDoCheck(this, this._el_23, throwOnChange);
        this._NgControlStatus_23_8.ngDoCheck(this, this._el_23, throwOnChange);
        var currVal_26_0_0 = (this.context.form.controls['precision'] && !this.context.form.controls['precision'].valid);
        this._NgIf_26_6.check_ngIf(currVal_26_0_0, throwOnChange, false);
        this._NgIf_26_6.ngDoCheck(this, this._anchor_26, throwOnChange);
        this._vc_26.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatusGroup_0_5.checkHost(this, this, this._el_0, throwOnChange);
        this._NgControlStatus_7_7.checkHost(this, this.compView_7, this._el_7, throwOnChange);
        this._NgControlStatus_14_7.checkHost(this, this, this._el_14, throwOnChange);
        this._NgControlStatus_23_8.checkHost(this, this, this._el_23, throwOnChange);
        var currVal_54 = !this.context.form.valid;
        if (import3.checkBinding(throwOnChange, this._expr_54, currVal_54)) {
            this.renderer.setElementProperty(this._el_28, 'disabled', currVal_54);
            this._expr_54 = currVal_54;
        }
        this.compView_7.detectChanges(throwOnChange);
    };
    View_TableFormComponent0.prototype.destroyInternal = function () {
        this._vc_26.destroyNestedViews();
        this.compView_7.destroy();
        this._FormControlName_7_5.ngOnDestroy();
        this._FormControlName_14_5.ngOnDestroy();
        this._FormControlName_23_6.ngOnDestroy();
        this._FormGroupDirective_0_3.ngOnDestroy();
    };
    View_TableFormComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 26)) {
            return new View_TableFormComponent1(this.viewUtils, this, 26, this._anchor_26, this._vc_26);
        }
        return null;
    };
    View_TableFormComponent0.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._FormGroupDirective_0_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_TableFormComponent0.prototype.handleEvent_14 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._CheckboxControlValueAccessor_14_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_TableFormComponent0.prototype.handleEvent_23 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_23_3.handleEvent(eventName, $event) && result);
        result = (this._NumberValueAccessor_23_4.handleEvent(eventName, $event) && result);
        return result;
    };
    View_TableFormComponent0.prototype.handleEvent_28 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onSubmit() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_TableFormComponent0;
}(import1.AppView));
var View_TableFormComponent1 = (function (_super) {
    __extends(View_TableFormComponent1, _super);
    function View_TableFormComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_TableFormComponent1, renderType_TableFormComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_TableFormComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import19.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import22.TemplateRef_(this, 2, this._anchor_2);
        this._NgIf_2_6 = new import20.Wrapper_NgIf(this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n        ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_4 = new import19.ViewContainer(4, 0, this, this._anchor_4);
        this._TemplateRef_4_5 = new import22.TemplateRef_(this, 4, this._anchor_4);
        this._NgIf_4_6 = new import20.Wrapper_NgIf(this._vc_4.vcRef, this._TemplateRef_4_5);
        this._text_5 = this.renderer.createText(this._el_0, '\n    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._anchor_4,
            this._text_5
        ]), null);
        return null;
    };
    View_TableFormComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import22.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import30.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        if (((token === import22.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import30.NgIf) && (4 === requestNodeIndex))) {
            return this._NgIf_4_6.context;
        }
        return notFoundResult;
    };
    View_TableFormComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.context.form.controls['precision'].hasError('required');
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        var currVal_4_0_0 = (this.parentView.context.form.controls['precision'].hasError('validatePrecision') && !this.parentView.context.form.controls['precision'].hasError('required'));
        this._NgIf_4_6.check_ngIf(currVal_4_0_0, throwOnChange, false);
        this._NgIf_4_6.ngDoCheck(this, this._anchor_4, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
        this._vc_4.detectChangesInNestedViews(throwOnChange);
    };
    View_TableFormComponent1.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
        this._vc_4.destroyNestedViews();
    };
    View_TableFormComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_TableFormComponent1.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_TableFormComponent2(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        if ((nodeIndex == 4)) {
            return new View_TableFormComponent3(this.viewUtils, this, 4, this._anchor_4, this._vc_4);
        }
        return null;
    };
    return View_TableFormComponent1;
}(import1.AppView));
var View_TableFormComponent2 = (function (_super) {
    __extends(View_TableFormComponent2, _super);
    function View_TableFormComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_TableFormComponent2, renderType_TableFormComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_TableFormComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'validation-error', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_0 = new import34.View_ValidationErrorComponent0(this.viewUtils, this, 0, this._el_0);
        this._ValidationErrorComponent_0_3 = new import34.Wrapper_ValidationErrorComponent();
        this.compView_0.create(this._ValidationErrorComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_TableFormComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import33.ValidationErrorComponent) && (0 === requestNodeIndex))) {
            return this._ValidationErrorComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_TableFormComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = 'Precision is required';
        this._ValidationErrorComponent_0_3.check_message(currVal_0_0_0, throwOnChange, false);
        if (this._ValidationErrorComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange)) {
            this.compView_0.markAsCheckOnce();
        }
        this.compView_0.detectChanges(throwOnChange);
    };
    View_TableFormComponent2.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_TableFormComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_TableFormComponent2;
}(import1.AppView));
var View_TableFormComponent3 = (function (_super) {
    __extends(View_TableFormComponent3, _super);
    function View_TableFormComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_TableFormComponent3, renderType_TableFormComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_TableFormComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'validation-error', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_0 = new import34.View_ValidationErrorComponent0(this.viewUtils, this, 0, this._el_0);
        this._ValidationErrorComponent_0_3 = new import34.Wrapper_ValidationErrorComponent();
        this.compView_0.create(this._ValidationErrorComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_TableFormComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import33.ValidationErrorComponent) && (0 === requestNodeIndex))) {
            return this._ValidationErrorComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_TableFormComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = 'Precision should be integer value from 0 till 4';
        this._ValidationErrorComponent_0_3.check_message(currVal_0_0_0, throwOnChange, false);
        if (this._ValidationErrorComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange)) {
            this.compView_0.markAsCheckOnce();
        }
        this.compView_0.detectChanges(throwOnChange);
    };
    View_TableFormComponent3.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_TableFormComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_TableFormComponent3;
}(import1.AppView));
//# sourceMappingURL=tableForm.component.ngfactory.js.map