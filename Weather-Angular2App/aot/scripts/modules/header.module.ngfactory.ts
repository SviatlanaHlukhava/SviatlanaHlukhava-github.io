/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../scripts/modules/header.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '../../../scripts/modules/shared.module';
import * as import4 from '@angular/router/src/router_module';
import * as import5 from '@angular/common/src/localization';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/i18n/tokens';
class HeaderModuleInjector extends import0.NgModuleInjector<import1.HeaderModule> {
  _CommonModule_0:import2.CommonModule;
  _SharedModule_1:import3.SharedModule;
  _RouterModule_2:import4.RouterModule;
  _HeaderModule_3:import1.HeaderModule;
  __NgLocalization_4:import5.NgLocaleLocalization;
  constructor(parent:import6.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _NgLocalization_4():import5.NgLocaleLocalization {
    if ((this.__NgLocalization_4 == null)) { (this.__NgLocalization_4 = new import5.NgLocaleLocalization(this.parent.get(import7.LOCALE_ID))); }
    return this.__NgLocalization_4;
  }
  createInternal():import1.HeaderModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._SharedModule_1 = new import3.SharedModule();
    this._RouterModule_2 = new import4.RouterModule(this.parent.get(import4.ROUTER_FORROOT_GUARD,(null as any)));
    this._HeaderModule_3 = new import1.HeaderModule();
    return this._HeaderModule_3;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.SharedModule)) { return this._SharedModule_1; }
    if ((token === import4.RouterModule)) { return this._RouterModule_2; }
    if ((token === import1.HeaderModule)) { return this._HeaderModule_3; }
    if ((token === import5.NgLocalization)) { return this._NgLocalization_4; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const HeaderModuleNgFactory:import0.NgModuleFactory<import1.HeaderModule> = new import0.NgModuleFactory(HeaderModuleInjector,import1.HeaderModule);