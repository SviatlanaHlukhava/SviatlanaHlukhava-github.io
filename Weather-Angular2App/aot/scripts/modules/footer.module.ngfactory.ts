/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../scripts/modules/footer.module';
import * as import2 from '@angular/core/src/di/injector';
class FooterModuleInjector extends import0.NgModuleInjector<import1.FooterModule> {
  _FooterModule_0:import1.FooterModule;
  constructor(parent:import2.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  createInternal():import1.FooterModule {
    this._FooterModule_0 = new import1.FooterModule();
    return this._FooterModule_0;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import1.FooterModule)) { return this._FooterModule_0; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const FooterModuleNgFactory:import0.NgModuleFactory<import1.FooterModule> = new import0.NgModuleFactory(FooterModuleInjector,import1.FooterModule);