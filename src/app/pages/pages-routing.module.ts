import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PagesComponent} from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule)
      },
      {
        path: 'table', loadChildren: () => import('./table/table.module').then(m => m.TableModule)
      },
      {
        path: 'tree', loadChildren: () => import('./tree/tree.module').then(m => m.TreeModule)
      },
      {
        path: 'drag', loadChildren: () => import('./drag/drag.module').then(m => m.DragModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
