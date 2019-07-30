import { Component, OnInit } from '@angular/core';
import { AutorService } from '../../servicios/articulo.service';
import { articuloModel } from 'src/app/models/articulo.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  listaArticulos:articuloModel[]=[];
  id=null;

  constructor(private servicio:AutorService, private route:ActivatedRoute) { }
    
  ngOnInit() {
    this.id=this.getUrlParametro("idAutor");
    this.getArticulosPorAutor();
  }

  getUrlParametro = (idAutor:string)=>{
    return this.route.snapshot.paramMap.get(idAutor);
  }

  getArticulosPorAutor():void{
    this.servicio.getArticulosPorAutor(this.id).subscribe(articulos =>{this.listaArticulos=articulos});
  }

  
}
