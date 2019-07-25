import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const url_base: string = 'http://localhost:3000/api/'
import { autorModel } from 'src/app/models/autor.model';
import { articuloModel } from '../models/articulo.model';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http:HttpClient) { }

  getArticulos(): Observable<articuloModel[]> {
    return this.http.get<articuloModel[]>(`${url_base}articulos`); //consigue todos los articulos
  }

  buscarUsuario(password:string,correo:string): Observable<autorModel[]>{
    return this.http.get<autorModel[]>(`${url_base}autores?filter[where][and][0][Correo]=${correo}&[where][and][1][Password]=${password}`);
  }//Este metodo devuelve el usuario que corresponde a la contarseña y el usuario
}
