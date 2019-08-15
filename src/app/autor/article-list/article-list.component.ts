import { Component, OnInit, Query } from '@angular/core';
import { AutorService } from '../../servicios/autor.service';
import { articuloModel } from 'src/app/models/articulo.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';
import { userModel } from 'src/app/models/user.model';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  listaArticulos:articuloModel[]=[];

  constructor(private servicioUser:UserService,private servicioAutor:AutorService) { }
    
  ngOnInit() {
    this.getArticulosPorAutor();
  }
  
  //Se llama el servicio el cual trae los articulos
  getArticulosPorAutor():void{
    let id=this.servicioUser.getUserId();
    this.servicioAutor.getArticulosPorAutor(id).subscribe(articulos =>{this.listaArticulos=articulos}); 
  }

}
