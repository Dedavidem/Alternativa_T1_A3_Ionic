import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.page.html',
  styleUrls: ['./datos-personales.page.scss'],
})
export class DatosPersonalesPage implements OnInit {

  constructor() { }

  text = 'Volver atrás';
  icon = 'arrow-undo';
  nombre = 'David';
  apellidos = 'Del Olmo Martín-Albo';
  email = 'daviddel.olmo.13@gmail.com';
  localidad = 'La Solana';
  password = 'eduardoArizaReillo';
  cursando = '2º DAM';
  edad = '22';
  font = 'Berlin Sans FB';
  telf = '92677777';

  doRefresh(event) {
    console.log('Empieza la operación async');

    setTimeout(() => {
      console.log('La operación async ha acabado');
      event.target.complete();
    }, 1000);
  }
  ngOnInit() {
  }

}
