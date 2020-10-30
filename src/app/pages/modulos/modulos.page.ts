import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.page.html',
  styleUrls: ['./modulos.page.scss'],
})
export class ModulosPage implements OnInit {
  text = 'Volver atrás';
  icon = 'arrow-undo-outline';

  constructor(public toastCtrl: ToastController) { }

  async openToastDAM1() {
    const toast = await this.toastCtrl.create({
      message: 'Has entrado al módulo 1º DAM',
      duration: 500,
      position: 'top'
    });
    toast.present();
  }
  async openToastDAM2() {
    const toast = await this.toastCtrl.create({
      message: 'Has entrado al módulo 2º DAM',
      duration: 500,
      position: 'top'
    });
    toast.present();
  }
  async openToastFCT() {
    const toast = await this.toastCtrl.create({
      message: 'Has entrado al módulo FCT',
      duration: 500,
      position: 'top'
    });
    toast.present();
  }

   ngOnInit() {
  }
}

