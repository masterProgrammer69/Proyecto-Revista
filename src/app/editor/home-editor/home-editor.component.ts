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


  edicionActiva: edicionModel = {
    Nombre: null,
    Volumen: null,
    Descripcion: null,
    FechaLimite: null,
    EstaActiva:null,
    IdEditor: null,
  }
  listaArticulos:articuloModel[]=[];

  constructor(private servicio:EditorService,private servicio2:AutorService) { }

  ngOnInit() {
    this.getEdicionActiva();
  }
  

  getEdicionActiva():void{
    this.servicio.getEdicionActiva().subscribe(edicion =>{
      this.edicionActiva=edicion;
      alert(this.edicionActiva.EstaActiva)
    });
    
  }



}
