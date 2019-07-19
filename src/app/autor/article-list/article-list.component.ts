import { Component, OnInit } from '@angular/core';
import { AutorService } from '../autor.service';

/*const base_url:string='http://localhost:3000/api/'*/

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articulos=[
    {
      idArticulo:"7465837748",
      titulo:"Surrogate End Points and Patient-Reported Outcomes for Novel Oncology Drugs Approved Between 2011 and 2017",
      fecha:"24/05/2018",
      estado:"Enviado",
      resultado:null,
    },
    {
      idArticulo:"4765870890",
      titulo:"National and State Estimates of Lost Earnings From Cancer Deaths in the United States",
      fecha:"12/07/2019",
      estado:"Aceptado",
      resultado:"El estudio cumple con todos los estandares tecnicos",
    },
    {
      idArticulo:"850349859",
      titulo:"Maintenance Therapy With Panitumumab Alone vs Panitumumab Plus Fluorouracil-Leucovorin in Patients With RAS Wild-Type Metastatic Colorectal Cancer",
      fecha:"01/01/2019",
      estado:"Ajustes",
      resultado:"Tiene un error en la cita de la fuentes, debe ser corregido",
    },
    {
      idArticulo:"2142159859",
      titulo:"Assessment of the Safety of Glucocorticoid Regimens in Combination With Abiraterone Acetate",
      fecha:"24/12/2015",
      estado:"Rechazado",
      resultado:"El estudio tiene multiples errores, debe ser replanteado",
    }
  ]
  constructor(private servicio:AutorService) { }
  
  ngOnInit() {
    this.articulos=this.servicio.getListaArticulos();
  }

  /*getInfoArticulos():Observable<infoArticuloModel[]>{
    return this.http.get<infoArticuloModel[]>('')
  }*/
  
}
