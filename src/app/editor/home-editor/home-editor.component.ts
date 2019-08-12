import { Component, OnInit } from '@angular/core';
import { edicionModel } from 'src/app/models/edicion.model';
import { EditorService } from 'src/app/servicios/editor.service';
import { articuloModel } from 'src/app/models/articulo.model';
import { AutorService } from 'src/app/servicios/articulo.service';

@Component({
  selector: 'app-home-editor',
  templateUrl: './home-editor.component.html',
  styleUrls: ['./home-editor.component.css']
})
export class HomeEditorComponent implements OnInit {


  edicionActiva:edicionModel;
  listaArticulos:articuloModel[]=[];

  constructor(private servicio:EditorService,private servicio2:AutorService) { }

  ngOnInit() {
    this.getEdicionActiva();
    this.getArticulosEdicion();
  }
  

  getEdicionActiva():void{
    this.servicio.getEdicionesActiva().subscribe(articulos =>{this.edicionActiva=articulos[0];
    });
  }

  //esto esta mal, no usar por el momento
  getArticulosEdicion():void{
    this.servicio2.getArticulosPorEdicion("2").subscribe(articulos =>{this.listaArticulos=articulos;
    });
  }



}
