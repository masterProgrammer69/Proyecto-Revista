import { Component, OnInit } from '@angular/core';
import { AutorService } from '../../servicios/articulo.service';
import { articuloModel } from 'src/app/models/articulo.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-articulo',
  templateUrl: './editar-articulo.component.html',
  styleUrls: ['./editar-articulo.component.css']
})
export class EditarArticuloComponent implements OnInit {
  
  articulo:articuloModel;
  id=null;
  
  constructor(private servicio:AutorService,private route:ActivatedRoute) { }
  
  ngOnInit() {
    this.id=this.getUrlParameter("idArticulo");
    this.buscarArticulo();
  }
  
  getUrlParameter = (idArticulo: string)=>{
    return this.route.snapshot.paramMap.get(idArticulo);
  }
  
  buscarArticulo():void{
    this.servicio.buscarArticulo(this.id).subscribe(articulo =>{this.articulo=articulo});
  }
}
