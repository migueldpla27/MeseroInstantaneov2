import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CpedidoPage } from './cpedido.page';

const routes: Routes = [
  {
    path: '',
    component: CpedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CpedidoPageRoutingModule {}
