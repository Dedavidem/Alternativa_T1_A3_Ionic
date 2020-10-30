import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosPersonalesPageRoutingModule } from './datos-personales-routing.module';

import { DatosPersonalesPage } from './datos-personales.page';
import { CabeceraModule } from '../../componentes/cabecera/cabecera.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosPersonalesPageRoutingModule,
    CabeceraModule
  ],
  declarations: [DatosPersonalesPage]
})
export class DatosPersonalesPageModule {}
