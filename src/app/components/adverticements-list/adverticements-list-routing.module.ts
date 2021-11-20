import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdverticementsListComponent } from './adverticements-list.component';

const routes: Routes = [
    {
        path: '',
        component: AdverticementsListComponent
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdvertAddRoutingModule { }