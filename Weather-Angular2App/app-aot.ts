// The browser platform with a compiler
import { platformBrowser } from '@angular/platform-browser';

// The app module
import { AppModuleNgFactory } from './aot/scripts/modules/app.module.ngfactory';

// Compile and launch the module
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
