import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { edicionModel } from '../models/edicion.model';
import { UserService } from './user.service';

const base_url: string = 'http://localhost:3000/api/'

@Injectable({
  providedIn: 'root'
})


export class EditorService {

  token:string;
  idRevistaActiva:string;

  constructor(private http: HttpClient,private service:UserService) { 
    this.token=this.service.getToken();
  }

  //todas las ediciones
  getAllEdiciones(): Observable<edicionModel[]> {
    return this.http.get<edicionModel[]>(`${base_url}Ediciones`); //consigue todos los articulos
  }

  //edicion activa
  getEdicionesActiva(): Observable<edicionModel> {
    return this.http.get<edicionModel>(`${base_url}Ediciones?access_token=${this.token}&filter[where][EstaActiva]=true`);
  }

  //Crear edicion
  crearEdicion(edicion:edicionModel): Observable<edicionModel> {
    return this.http.post<edicionModel>(`${base_url}Ediciones?access_token=${this.token}`,edicion,{
      headers:new HttpHeaders({
        "content-type":"application/json"
      })
    });
  }


}
