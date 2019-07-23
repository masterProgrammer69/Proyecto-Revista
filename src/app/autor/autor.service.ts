import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { articuloModel } from '../models/articulo.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const url_base: string = 'http://localhost:3000/api/'

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(private http: HttpClient) { }

  getArticulos(): Observable<articuloModel[]> {
    return this.http.get<articuloModel[]>(`${url_base}articulos`); //consigue todos los articulos
  }

  getArticulosPorAutor(): Observable<articuloModel[]> {
    return this.http.get<articuloModel[]>(`${url_base}articulos?filter[where][IdAutor]=5d3528c4f340c62fac2d502b`);
  }


}
