/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../scripts/components/cityWeatherSectionRouter.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@ngrx/store/src/store';
import * as import9 from '../../../scripts/components/cityWeatherSection.component';
import * as import10 from './cityWeatherSection.component.ngfactory';
import * as import11 from '@angular/common/src/pipes/async_pipe';
import * as import12 from '../../../scripts/actions/WeatherActions';
import * as import13 from '../../../scripts/actions/LoadingActions';
import * as import14 from '../../../scripts/services/WeatherAPI';
import * as import15 from '../../../scripts/services/Logger';
export class Wrapper_CityWeatherSectionRouterComponent {
  /*private*/ _eventHandler:Function;
  context:import0.CityWeatherSectionRouterComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.CityWeatherSectionRouterComponent(p0);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_CityWeatherSectionRouterComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_CityWeatherSectionRouterComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.CityWeatherSectionRouterComponent>;
  _CityWeatherSectionRouterComponent_0_3:Wrapper_CityWeatherSectionRouterComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_CityWeatherSectionRouterComponent_Host0,renderType_CityWeatherSectionRouterComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'city-weather-section-router',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_CityWeatherSectionRouterComponent0(this.viewUtils,this,0,this._el_0);
    this._CityWeatherSectionRouterComponent_0_3 = new Wrapper_CityWeatherSectionRouterComponent(this.injectorGet(import8.Store,this.parentIndex));
    this.compView_0.create(this._CityWeatherSectionRouterComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._CityWeatherSectionRouterComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.CityWeatherSectionRouterComponent) && (0 === requestNodeIndex))) { return this._CityWeatherSectionRouterComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._CityWeatherSectionRouterComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const CityWeatherSectionRouterComponentNgFactory:import7.ComponentFactory<import0.CityWeatherSectionRouterComponent> = new import7.ComponentFactory<import0.CityWeatherSectionRouterComponent>('city-weather-section-router',View_CityWeatherSectionRouterComponent_Host0,import0.CityWeatherSectionRouterComponent);
const styles_CityWeatherSectionRouterComponent:any[] = ([] as any[]);
var renderType_CityWeatherSectionRouterComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_CityWeatherSectionRouterComponent,{});
export class View_CityWeatherSectionRouterComponent0 extends import1.AppView<import0.CityWeatherSectionRouterComponent> {
  _el_0:any;
  compView_0:import1.AppView<import9.CityWeatherSectionComponent>;
  _CityWeatherSectionComponent_0_3:import10.Wrapper_CityWeatherSectionComponent;
  _pipe_async_0:import11.AsyncPipe;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_CityWeatherSectionRouterComponent0,renderType_CityWeatherSectionRouterComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckOnce);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'city-weather-section',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_0 = new import10.View_CityWeatherSectionComponent0(this.viewUtils,this,0,this._el_0);
    this._CityWeatherSectionComponent_0_3 = new import10.Wrapper_CityWeatherSectionComponent(this.compView_0.ref,this.parentView.injectorGet(import8.Store,this.parentIndex),this.parentView.injectorGet(import12.WeatherActions,this.parentIndex),this.parentView.injectorGet(import13.LoadingActions,this.parentIndex),this.parentView.injectorGet(import14.WeatherApiService,this.parentIndex),this.parentView.injectorGet(import15.LoggerService,this.parentIndex));
    this.compView_0.create(this._CityWeatherSectionComponent_0_3.context);
    this._pipe_async_0 = new import11.AsyncPipe(this.ref);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.CityWeatherSectionComponent) && (0 === requestNodeIndex))) { return this._CityWeatherSectionComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import6.ValueUnwrapper();
    valUnwrapper.reset();
    const currVal_0_0_0:any = valUnwrapper.unwrap(this._pipe_async_0.transform(this.context.coordinate));
    this._CityWeatherSectionComponent_0_3.check_coordinate(currVal_0_0_0,throwOnChange,valUnwrapper.hasWrappedValue);
    if (this._CityWeatherSectionComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._CityWeatherSectionComponent_0_3.ngOnDestroy();
    this._pipe_async_0.ngOnDestroy();
  }
}