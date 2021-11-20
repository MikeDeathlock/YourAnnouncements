import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertAddRoutingModule } from './adverticements-list-routing.module';
import { AdverticementsListComponent } from './adverticements-list.component';



@NgModule({
  declarations: [
    AdverticementsListComponent
  ],
  imports: [
    CommonModule,
    AdvertAddRoutingModule
  ]
})
export class AdverticementsListModule { }
