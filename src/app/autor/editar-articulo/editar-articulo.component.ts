import { Component, OnInit } from '@angular/core';
import { AutorService } from '../../servicios/autor.service';
import { articuloModel } from 'src/app/models/articulo.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-articulo',
  templateUrl: './editar-articulo.component.html',
  styleUrls: ['./editar-articulo.component.css']
})
export class EditarArticuloComponent implements OnInit {
  
  articulo:articuloModel={
    Titulo:null,
    Abstract:null,
    PalabrasClave:null,
    Fecha:null,
    IdEdicion:null,
    Autor:null,
    Estado:null
  };
  
  id=null;
  
  constructor(private servicio:AutorService,private route:ActivatedRoute,private router:Router) { }
  
  ngOnInit() {
    this.id=this.getUrlParameter("idArticulo");
    this.buscarArticulo();
  }
  
  //Retorna el id de el articulo que se envio por la url
  getUrlParameter = (idArticulo: string)=>{
    return this.route.snapshot.paramMap.get(idArticulo);
  }
  
  //Llamamos al servicio para que nos devuelva el articulo que se relaciona con el id
  buscarArticulo():void{
    this.servicio.buscarArticulo(this.id).subscribe(articulo =>{this.articulo=articulo});
  }

  //Se pasa el articulo modificado al servicio para que lo actualize
  guardarInfo():void{
    this.servicio.actualizarArticulo(this.articulo).subscribe(item=>{
      console.log("Guardando datos editados");
      this.router.navigate(["/autor/lista-de-articulos"]);
    });
  }
}
