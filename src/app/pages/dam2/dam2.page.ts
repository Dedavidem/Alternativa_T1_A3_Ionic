import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-dam2',
  templateUrl: './dam2.page.html',
  styleUrls: ['./dam2.page.scss'],
})
export class Dam2Page implements OnInit {

  text = 'Volver a inicio';
  icon = 'arrow-undo';

  elementos = [
    {
    icono: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/data-access-2635734-2183035.png',
    asignatura: 'Acceso a Datos',
    color: 'secondary',
    isChecked: 'true', },
    {
    icono: 'https://cdn.mos.cms.futurecdn.net/wH5y2PkWhCxqKBje8rBp5e.jpg',
    asignatura: 'Desarrollo de Interfaces',
    color: 'tertiary',
    isChecked: 'false'},
    {
    icono: 'https://icon-library.com/images/services-icon-png/services-icon-png-8.jpg',
    asignatura: 'Programación de Procesos y Servicios',
    color: 'success',
    isChecked: 'true'},
    {
    icono: 'https://image.flaticon.com/icons/png/512/1465/1465429.png',
    asignatura: 'Empresa e Iniciativa Emprendedora',
    color: 'warning',
    isChecked: 'true'},
    {
    icono: 'https://img2.freepng.es/20180403/diq/kisspng-enterprise-resource-planning-business-accounts-rec-accounting-5ac36ed50d7552.4031156815227573330551.jpg',
    asignatura: 'Sistemas de Gestión Empresarial',
    color: 'danger',
    isChecked: 'false'},
    {
    icono: 'https://image.flaticon.com/icons/png/512/186/186239.png',
    asignatura: 'Programación Multimedia y Móviles',
    color: 'dark',
    isChecked: 'true'
    }];

    constructor(public toastCtrl: ToastController) { }

    onClick(elemento) {

   console.log(elemento);

    }

  ngOnInit() {
  }

}
