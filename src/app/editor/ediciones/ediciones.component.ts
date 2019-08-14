import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ediciones',
  templateUrl: './ediciones.component.html',
  styleUrls: ['./ediciones.component.css']
})
export class EdicionesComponent implements OnInit {

  mostrarEvaluadores = false

  constructor() { }

  ngOnInit() {
  }

  descargarArchivo(idArchivo: string): void {
    alert("Se va a descargar el archivo")
  }


}
