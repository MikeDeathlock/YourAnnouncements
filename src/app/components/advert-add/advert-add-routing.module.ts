import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdvertAddComponent } from './advert-add.component';

const routes: Routes = [
    {
        path: '',
        component: AdvertAddComponent
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdvertAddRoutingModule { }