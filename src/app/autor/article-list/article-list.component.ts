import { Component, OnInit } from '@angular/core';
import { AutorService } from '../../servicios/articulo.service';
import { articuloModel } from 'src/app/models/articulo.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';
import { userModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  listaArticulos:articuloModel[]=[];

  constructor(private servicioUser:UserService,private servicioAutor:AutorService, /*private route:ActivatedRoute*/) { }
    
  ngOnInit() {
    //this.id=this.getUrlParametro("idAutor");
    this.getArticulosPorAutor();
  }

  /*getUrlParametro = (idAutor:string)=>{
    return this.route.snapshot.paramMap.get(idAutor);
  }*/

  getArticulosPorAutor():void{
    let id=this.servicioUser.getIdUser();
    this.servicioAutor.getArticulosPorAutor(id).subscribe(articulos =>{this.listaArticulos=articulos});
  }

  
}
