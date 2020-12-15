import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPlatosPage } from './lista-platos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPlatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaPlatosPageRoutingModule {}
