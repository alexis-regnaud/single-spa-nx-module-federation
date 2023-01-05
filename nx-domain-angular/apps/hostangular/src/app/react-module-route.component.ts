import { Component, ViewEncapsulation } from '@angular/core';
import { mountRootParcel } from 'single-spa';
import ReactModule from 'modulereact/Module';
/* eslint-disable */
import { ParcelModule } from 'single-spa-angular/parcel';

@Component({
  standalone: true,
  selector: 'react-module-route',
  imports: [ParcelModule],
  template: `
    <div class="wrapper">
      <parcel [config]="config" [mountParcel]="mountRootParcel"></parcel>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class ReactModuleRouteComponent {
  async config() {
    return ReactModule;
  }
  mountRootParcel = mountRootParcel;
}
