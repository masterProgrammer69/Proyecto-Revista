import { Component, OnInit } from '@angular/core';
import { AutorService } from '../autor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-articulo',
  templateUrl: './editar-articulo.component.html',
  styleUrls: ['./editar-articulo.component.css']
})
export class EditarArticuloComponent implements OnInit {
  /*articulo={
    idArticulo:null,
    titulo:null,
    abstract:null,
    palabrasClave:null
  }

  constructor() { }
  
  getUrlParameter = (parameterName: string)=>{
    return this.route.snapshot.paramMap.get(parameterName);
  }

  ngOnInit() {
    let id=this.getUrlParameter("id");
    let articuloEncontrado=this.servicio.buscarArticulo(id);
    this.articulo.titulo=articuloEncontrado.titulo;
    this.articulo.idArticulo=articuloEncontrado.id;
    this.articulo.abstract=articuloEncontrado.abstract;
    this.articulo.palabrasClave=articuloEncontrado.palabrasClave;
  }*/

  constructor() { }
  ngOnInit() {}

}
