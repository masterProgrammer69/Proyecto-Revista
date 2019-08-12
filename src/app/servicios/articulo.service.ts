import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { articuloModel } from '../models/articulo.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
const url_base: string = 'http://localhost:3000/api/'

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  token:string;
  idRevistaActiva:string;

  constructor(private http: HttpClient,private service:UserService) { 
    this.token=this.service.getToken();
  }

  getArticulos(): Observable<articuloModel[]> {
    return this.http.get<articuloModel[]>(`${url_base}Articulos`); //consigue todos los articulos
  }

  getArticulosPorAutor(idAutor:string): Observable<articuloModel[]> {
    return this.http.get<articuloModel[]>(`${url_base}articulos?access_token=${this.token}&filter[where][IdAutor]=${idAutor}`);
  }

  getArticulosPorEdicion(idEdicion:string): Observable<articuloModel[]> {
    return this.http.get<articuloModel[]>(`${url_base}articulos?access_token=${this.token}&filter[where][IdEdicion]=${idEdicion}`);
  }

  buscarArticulo(idArticulo:string): Observable<articuloModel> {
    return this.http.get<articuloModel>(`${url_base}articulos/${idArticulo}?access_token=${this.token}`);
  }

  actualizarArticulo(articulo:articuloModel): Observable<articuloModel> {
    return this.http.put<articuloModel>(`${url_base}articulos?access_token=${this.token}`,articulo,
    {
      headers:new HttpHeaders({
        "content-type":"application/json"
      })
    });
  }

  crearArticulo(articulo:articuloModel): Observable<articuloModel> {
    return this.http.post<articuloModel>(`${url_base}Articulos?access_token=${this.token}`,articulo,{
      headers:new HttpHeaders({
        "content-type":"application/json"
      })
    });
  }

  deleteProduct(articuloId: String): Observable<articuloModel> {
    return this.http.delete<articuloModel>(`${url_base}articulos/${articuloId}`);
  };
}
