import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.scss'],
})
export class ComponentesComponent implements OnInit {


  text = 'Volver atrás';
  icon = 'arrow-undo';
  @Input() titulo: string;
  @Input() titulo2: string;

  constructor() { }



  ngOnInit() {}

}
