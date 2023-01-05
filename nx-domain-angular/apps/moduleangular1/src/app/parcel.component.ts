import { Component } from '@angular/core';
import { singleSpaPropsSubject } from '../single-spa/single-spa-props';

@Component({
  selector: 'app-parcel',
  template: `<section>
    <!-- Angular Parcel component is mounted! -->
    Parcel component with {{ (props$ | async)?.name }} is mounted!
    <br />
    Passed props from Parent
    <div style="color: red">{{ (props$ | async)?.customProp1 }}</div>
  </section> `,
})
export class ParcelComponent {
  public props$ = singleSpaPropsSubject;
  title = 'angular-parcel';
}
