// import 'angular2-meteor-polyfills';
// import {enableProdMode} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {CRYPLAModule} from "./app.module";

// enableProdMode();
const platform = platformBrowserDynamic();
platform.bootstrapModule(CRYPLAModule);
