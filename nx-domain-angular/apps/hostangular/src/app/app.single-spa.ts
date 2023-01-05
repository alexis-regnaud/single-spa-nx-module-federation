import { enableProdMode, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router, NavigationStart } from '@angular/router';
import {
  singleSpaAngular,
  getSingleSpaExtraProviders,
} from 'single-spa-angular';

import { AppModule } from './app.module';
import { environment } from '../environments/environment';
import { singleSpaPropsSubject } from '../single-spa/single-spa-props';
const ngVersion = require('../../../../package.json').dependencies[
  '@angular/core'
]; // better just take the major version

if (environment.production) {
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: (singleSpaProps) => {
    singleSpaPropsSubject.next(singleSpaProps);

    (window as any).plattform = (window as any).plattform || {};
    let platform = (window as any).plattform[ngVersion];
    if (!platform) {
      platform = platformBrowserDynamic(getSingleSpaExtraProviders());
      (window as any).plattform[ngVersion] = platform;
    }
    return platform
      .bootstrapModule(AppModule)
      .catch((err: any) => console.error(err));
  },
  Router,
  NavigationStart,
  template: '<nx-domain-angular-root />',
  NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
