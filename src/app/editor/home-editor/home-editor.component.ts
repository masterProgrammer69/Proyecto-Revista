import { Component, OnInit } from '@angular/core';
import { edicionModel } from 'src/app/models/edicion.model';
import { EditorService } from 'src/app/servicios/editor.service';
import { articuloModel } from 'src/app/models/articulo.model';
import { AutorService } from 'src/app/servicios/autor.service';
import { userModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-home-editor',
  templateUrl: './home-editor.component.html',
  styleUrls: ['./home-editor.component.css']
})
export class HomeEditorComponent implements OnInit {


  edicionActiva: edicionModel = {
    id: null,
    Nombre: null,
    Volumen: null,
    Descripcion: null,
    FechaLimite: null,
    EstaActiva: null,
    IdEditor: null,
  };
  listaArticulos: articuloModel[] = [];
  listaEvaluadores:userModel[]=[];

  articuloTemporal: articuloModel = {
    id: null,
    Titulo: null,
    Abstract: null,
    PalabrasClave: null,
    Fecha: null,
    Estado: null,
    Autor: null,
    IdEdicion: null,
  };

  mostrarEvaluadores = false;

  constructor(private ediServicio: EditorService, private autServicio: AutorService,private userService:UserService) { }

  ngOnInit() {
    this.getEdicionActiva();
    this.ediServicio.getEvaluadores().subscribe(evaluador =>{
      this.listaEvaluadores=evaluador;
      console.log("lista:"+this.listaEvaluadores.length);
    });
  }


  getEdicionActiva(): void {
    this.ediServicio.getEdicionActiva().subscribe(edicion => {
      this.edicionActiva = edicion;
      this.getArticulos();
    });
  }

  getArticulos(): void {
    this.autServicio.getArticulosPorEdicion(this.edicionActiva.id).subscribe(articulos => {
      this.listaArticulos = articulos;
    });

  }

  asignaInformacionModal(idArticulo: string): void {
    this.autServicio.buscarArticulo(idArticulo).subscribe(articulo => {
      this.articuloTemporal = articulo;
    });
  }


  activarListadoEvaluadores(): void {
    this.mostrarEvaluadores = !this.mostrarEvaluadores;
  }

  desactivaListadoEvaluadores(): void {
    this.mostrarEvaluadores = !this.mostrarEvaluadores;
  }

  asignarEvaluadores(idEvaluadores: string[]): void {
    alert("Se van a asignar estos evaluadores")
  }

  asignaEvaluadorTemp(idEvaluador: string): void {
    alert("Se asigno evaluador a")
  }

}
