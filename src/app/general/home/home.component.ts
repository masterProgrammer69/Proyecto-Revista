import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import { autorModel } from 'src/app/models/autor.model';
import { articuloModel } from 'src/app/models/articulo.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  correo:string = null;
  password:string = null;
  autores:autorModel[]=[];
  listaArticulos:articuloModel[]=[];
  alertaNoEncontrado:string="";

  constructor(private servicio:GeneralService) { }

  ngOnInit() {
    this.getArticulos();
  }

  buscarUsuario():void{
    this.alertaNoEncontrado="El correo o la contraseña son erroneas!";
    this.servicio.buscarUsuario(this.password, this.correo).subscribe(autor =>{this.autores=autor});
  }

  getArticulos():void{
    this.servicio.getArticulos().subscribe(articulos =>{this.listaArticulos=articulos});
  }


}
