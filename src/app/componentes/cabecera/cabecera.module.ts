import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ComponentesComponent } from '../componentes.component';



@NgModule({
  declarations: [ComponentesComponent],
  exports: [ComponentesComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class CabeceraModule { }
