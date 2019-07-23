import { Component, OnInit } from '@angular/core';
import { AutorService } from '../autor.service';
import { articuloModel } from 'src/app/models/articulo.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  listaArticulos:articuloModel[]=[];

  constructor(private servicio:AutorService) { }
    
  ngOnInit() {
    this.getArticulosPorAutor();
  }

  getArticulosPorAutor():void{
    this.servicio.getArticulosPorAutor().subscribe(articulos =>{this.listaArticulos=articulos});
  }

  
}
