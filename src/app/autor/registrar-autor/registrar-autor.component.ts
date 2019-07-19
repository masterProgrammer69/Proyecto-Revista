import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-autor',
  templateUrl: './registrar-autor.component.html',
  styleUrls: ['./registrar-autor.component.css']
})
export class RegistrarAutorComponent implements OnInit {
  autor={
    primerNombre:null,
    segundoNombre:null,
    primerApellido:null,
    segundoApellido:null,
    telefono:null,
    correo:null
  }

  constructor() { }

  ngOnInit() {
  }

}
