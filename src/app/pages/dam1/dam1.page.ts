import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dam1',
  templateUrl: './dam1.page.html',
  styleUrls: ['./dam1.page.scss'],
})
export class Dam1Page implements OnInit {

  text = 'Volver a inicio';
  icon = 'arrow-undo';
  checkProg = true;
  checkBdd = true;
  checkSis = true;
  checkIng = true;
  checkLm = true;
  checkEnt = false;
  checkEng = false;
  checkFol = false;

  constructor(public toastCtrl: ToastController) { }

  async openToastProg() {
    const toast = await this.toastCtrl.create({
      message: 'Has seleccionado el módulo Programación',
      duration: 500,
      position: 'top',
      color: 'warning'
    });
    toast.present();
  }
  async openToastBdd() {
    const toast = await this.toastCtrl.create({
      message: 'Has seleccionado el módulo Bases de Datos',
      duration: 500,
      position: 'top',
      color: 'success'
    });
    toast.present();
  }
  async openToastLm() {
    const toast = await this.toastCtrl.create({
      message: 'Has seleccionado el módulo Lenguajes de Marcas',
      duration: 500,
      position: 'top',
      color: 'secondary'
    });
    toast.present();
  }
  async openToastEnt() {
    const toast = await this.toastCtrl.create({
      message: 'Has seleccionado el módulo Entornos de Desarrollo',
      duration: 500,
      position: 'top',
      color: 'danger'
    });
    toast.present();
  }
  async openToastSis() {
    const toast = await this.toastCtrl.create({
      message: 'Has seleccionado el módulo Sistemas Informáticos',
      duration: 500,
      position: 'top',
      color: 'dark'
    });
    toast.present();
  }
  async openToastFol() {
    const toast = await this.toastCtrl.create({
      message: 'Has seleccionado el módulo Formación y Orientación Laboral',
      duration: 500,
      position: 'top',
      color: 'medium'
    });
    toast.present();
  }
  async openToastEng() {
    const toast = await this.toastCtrl.create({
      message: 'Has seleccionado el módulo Inglés',
      duration: 500,
      position: 'top',
      color: 'light'
    });
    toast.present();
  }

  ngOnInit() {
  }

}
