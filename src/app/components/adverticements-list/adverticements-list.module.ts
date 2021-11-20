import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdvertAddRoutingModule } from './adverticements-list-routing.module';
import { AdverticementsListComponent } from './adverticements-list.component';
import { AdverticementItemComponent } from './adverticement-item/adverticement-item.component';



@NgModule({
  declarations: [
    AdverticementsListComponent,
    AdverticementItemComponent
  ],
  imports: [
    CommonModule,
    AdvertAddRoutingModule,
    FormsModule
  ]
})
export class AdverticementsListModule { }
