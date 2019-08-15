import { Component, OnInit } from '@angular/core';
import { AutorService } from 'src/app/servicios/autor.service';
import { articuloModel } from 'src/app/models/articulo.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-de-articulos',
  templateUrl: './lista-de-articulos.component.html',
  styleUrls: ['./lista-de-articulos.component.css']
})
export class ListaDeArticulosComponent implements OnInit {

  listaArticulos:articuloModel[]=[];
  cp:number=1;
  total:number=0;

  constructor(private servicio:AutorService) { }

  ngOnInit() {
    this.getArticulos();
  }

  //Llamamos al servicio para que nos devuelva los articulos
  getArticulos():void{
    this.servicio.getArticulos().subscribe(articulos =>{this.listaArticulos=articulos;
      this.total=articulos.length;
    });
  }


  
}
