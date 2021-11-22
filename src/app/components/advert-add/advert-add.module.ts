import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdvertAddRoutingModule } from './advert-add-routing.module';
import { AdvertAddComponent } from './advert-add.component';



@NgModule({
  declarations: [
    AdvertAddComponent
  ],
  imports: [
    CommonModule,
    AdvertAddRoutingModule,
    FormsModule
  ]
})
export class AdvertAddModule { }
