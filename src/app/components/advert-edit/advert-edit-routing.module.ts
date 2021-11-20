import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdvertEditComponent } from './advert-edit.component';

const routes: Routes = [
    {
        path: '',
        component: AdvertEditComponent
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdvertEditRoutingModule { }