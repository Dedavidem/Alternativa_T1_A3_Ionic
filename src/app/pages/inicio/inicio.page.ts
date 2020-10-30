import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  text = 'Volver atrás';
  icon = 'Del Olmo';
  icono: 'ios-rewind';

  constructor() { }

  ngOnInit() {
  }

}
