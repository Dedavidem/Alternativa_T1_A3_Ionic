import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModulosPageRoutingModule } from './modulos-routing.module';

import { ModulosPage } from './modulos.page';
import { CabeceraModule } from '../../componentes/cabecera/cabecera.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModulosPageRoutingModule,
    CabeceraModule
  ],
  declarations: [ModulosPage]
})
export class ModulosPageModule {}
