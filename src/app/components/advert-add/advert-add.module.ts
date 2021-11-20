import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertAddRoutingModule } from './advert-add-routing.module';
import { AdvertAddComponent } from './advert-add.component';



@NgModule({
  declarations: [
    AdvertAddComponent
  ],
  imports: [
    CommonModule,
    AdvertAddRoutingModule
  ]
})
export class AdvertAddModule { }
