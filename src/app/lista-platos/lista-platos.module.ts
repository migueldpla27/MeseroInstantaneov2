import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPlatosPageRoutingModule } from './lista-platos-routing.module';

import { ListaPlatosPage } from './lista-platos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPlatosPageRoutingModule
  ],
  declarations: [ListaPlatosPage]
})
export class ListaPlatosPageModule {}
