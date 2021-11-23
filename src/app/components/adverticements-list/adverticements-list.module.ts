import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdvertAddRoutingModule } from './adverticements-list-routing.module';
import { AdverticementsListComponent } from './adverticements-list.component';
import { AdverticementItemComponent } from './adverticement-item/adverticement-item.component';
import { AdvertDetailsComponent } from '../advert-details/advert-details.component';

@NgModule({
  declarations: [
    AdverticementsListComponent,
    AdverticementItemComponent,
    AdvertDetailsComponent,  
  ],
  imports: [
    CommonModule,
    AdvertAddRoutingModule,
    FormsModule
  ]
})
export class AdverticementsListModule { }
