import { NxWelcomeComponent } from './nx-welcome.component';
import { ReactModuleRouteComponent } from './react-module-route.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'angular/moduleangular2',
    loadChildren: () =>
      import('moduleangular2/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'angular/moduleangular1',
    loadChildren: () =>
      import('moduleangular1/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'angular/modulereact',
    component: ReactModuleRouteComponent,
  },
  {
    path: 'angular',
    component: NxWelcomeComponent,
  },
];
