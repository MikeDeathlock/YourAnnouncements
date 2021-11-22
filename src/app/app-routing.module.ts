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
        path: 'edit-advert/:id',
        loadChildren: () =>
          import('./components/advert-edit/advert-edit.module').then((m) => m.AdvertEditModule)
      },
    ]
  },
  {
    path: 'error-page',
    loadChildren: () =>
      import('./components/errors/page404/page404.module').then((m) => m.Page404Module)
  },
  {
    path: '**',
    redirectTo: 'error-page'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
