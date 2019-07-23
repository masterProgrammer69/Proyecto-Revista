import { Component, OnInit } from '@angular/core';
import { AutorService } from '../autor.service';

@Component({
  selector: 'app-lista-resultados',
  templateUrl: './lista-resultados.component.html',
  styleUrls: ['./lista-resultados.component.css']
})
export class ListaResultadosComponent implements OnInit {
  resultados=[];
  
  constructor(private servicio:AutorService) { }
  
  ngOnInit() 
  {
  }
  
}
