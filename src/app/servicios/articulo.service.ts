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

  getArticulosPorAutor(idAutor:string): Observable<articuloModel[]> {
    return this.http.get<articuloModel[]>(`${url_base}articulos?filter[where][IdAutor]=${idAutor}`);
  }

  buscarArticulo(idArticulo:string): Observable<articuloModel> {
    return this.http.get<articuloModel>(`${url_base}articulos/${idArticulo}`);
  }

}
