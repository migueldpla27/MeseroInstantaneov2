import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CpedidoPageRoutingModule } from './cpedido-routing.module';

import { CpedidoPage } from './cpedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CpedidoPageRoutingModule
  ],
  declarations: [CpedidoPage]
})
export class CpedidoPageModule {}
