import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',    
    children: [
      {
        path: '',
        redirectTo: 'adverticements',
        pathMatch: 'full'
      },
      {
        path: 'adverticements',
        loadChildren: () =>
          import('./components/adverticements-list/adverticements-list.module').then((m) => m.AdverticementsListModule)
      },
      {
        path: 'add-advert',
        loadChildren: () =>
          import('./components/advert-add/advert-add.module').then((m) => m.AdvertAddModule)
      },
      {
        path: 'edit-advert',
        loadChildren: () =>
          import('./components/advert-edit/advert-edit.module').then((m) => m.AdvertEditModule)
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
