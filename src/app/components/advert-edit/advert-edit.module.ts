import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertEditRoutingModule } from './advert-edit-routing.module';
import { AdvertEditComponent } from './advert-edit.component';
import { WrongPageComponent } from '../errors/wrong-page/wrong-page.component';



@NgModule({
  declarations: [
    AdvertEditComponent,
    WrongPageComponent
  ],
  imports: [
    CommonModule,
    AdvertEditRoutingModule
  ]
})
export class AdvertEditModule { }
