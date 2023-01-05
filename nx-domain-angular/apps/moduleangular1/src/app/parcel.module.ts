import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ParcelComponent } from './parcel.component';

@NgModule({
  declarations: [ParcelComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [ParcelComponent],
})
export class ParcelModule {}
