import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fct',
  templateUrl: './fct.page.html',
  styleUrls: ['./fct.page.scss'],
})
export class FctPage implements OnInit {

  customAlertOptions: any = {
    header: 'Ejemplo adición - frutas',
    subHeader: 'Elige a tu gusto',
    message: '1€ por cada una',
    translucent: true
  };

  customPopoverOptions: any = {
    header: 'Asignaturas 2º DAM',
    subHeader: 'Elige una asignatura',
    message: 'Sólo podrás elegir la que más te guste'
  };

  customActionSheetOptions: any = {
    header: 'Colores',
    subHeader: 'Selecciona tu color favorito'
  };

  text = 'Volver a inicio';
  icon = 'arrow-undo';

  abrirInfo() {
    window.open('https://www.educantabria.es/formacion-en-centros-de-trabajo/que-es-la-fct.html#:~:text=La%20Formaci%C3%B3n%20en%20Centros%20de,medio%20como%20de%20grado%20superior.');
   }

   abrirInform() {
    window.open('https://www.todofp.es/que-como-y-donde-estudiar/que-estudiar/familia/loe/informatica-comunicaciones.html');
   }

   abrirSanidad() {
    window.open('https://www.todofp.es/que-como-y-donde-estudiar/que-estudiar/familia/loe/sanidad.html');
   }

   abrirAlimento() {
    window.open('https://www.todofp.es/que-como-y-donde-estudiar/que-estudiar/familia/loe/industrias-alimentarias.html');
   }

   abrirServicios() {
    window.open('https://www.todofp.es/que-como-y-donde-estudiar/que-estudiar/familia/loe/servicios-socioculturales-comunidad.html');
   }

   abrirHotel() {
    window.open('https://www.todofp.es/que-como-y-donde-estudiar/que-estudiar/familia/loe/hosteleria-turismo.html');
   }

   abrirElectricidad() {
    window.open('https://www.todofp.es/que-como-y-donde-estudiar/que-estudiar/familia/loe/electricidad-electronica.html');
   }

   abrirPlayStation() {
    window.open('https://www.playstation.com/es-es/');
   }

   abrirXbox() {
    window.open('https://www.xbox.com/es-ES');
   }

   abrirSteam() {
    window.open('https://store.steampowered.com/?l=spanish');
   }


  constructor() { }

  ngOnInit() {
  }

}
