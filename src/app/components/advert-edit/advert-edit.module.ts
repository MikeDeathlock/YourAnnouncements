import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertEditRoutingModule } from './advert-edit-routing.module';
import { AdvertEditComponent } from './advert-edit.component';



@NgModule({
  declarations: [
    AdvertEditComponent
  ],
  imports: [
    CommonModule,
    AdvertEditRoutingModule
  ]
})
export class AdvertEditModule { }
