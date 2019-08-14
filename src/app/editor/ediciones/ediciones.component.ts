import { Component, OnInit } from '@angular/core';
import { edicionModel } from 'src/app/models/edicion.model';
import { EditorService } from 'src/app/servicios/editor.service';
import { articuloModel } from 'src/app/models/articulo.model';
import { AutorService } from 'src/app/servicios/articulo.service';

@Component({
  selector: 'app-ediciones',
  templateUrl: './ediciones.component.html',
  styleUrls: ['./ediciones.component.css']
})
export class EdicionesComponent implements OnInit {

  mostrarEvaluadores = false
  edicionesViejas: edicionModel[] = [];
  listaArticulos: articuloModel[] = [];

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

  constructor(private ediServicio: EditorService,private autService:AutorService) { }

  ngOnInit() {
    this.getEdiciones();
    this.getArticulos();
  }

  descargarArchivo(idArchivo: string): void {
    alert("Se va a descargar el archivo")
  }

  getEdiciones(): void {
    this.ediServicio.getEdicionesNoActivas().subscribe(ediciones => {
      this.edicionesViejas = ediciones;
    });
  }

  getArticulos(): void {
    this.autService.getArticulos().subscribe(articulos => {
    this.listaArticulos = articulos;
    });
  }

  asignaInformacionModal(idArticulo: string): void {
    this.autService.buscarArticulo(idArticulo).subscribe(articulo => {
      this.articuloTemporal = articulo;
    });
  }
}

