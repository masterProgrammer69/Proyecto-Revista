import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { edicionModel } from '../models/edicion.model';
import { UserService } from './user.service';
import { retry, catchError } from 'rxjs/operators';
import { userModel } from '../models/user.model';

const base_url: string = 'http://localhost:3000/api/'

@Injectable({
  providedIn: 'root'
})


export class EditorService {
  
  token:string;
  RevistaActiva:edicionModel;
  
  constructor(private http: HttpClient,private service:UserService) { 
    this.token=this.service.getToken();
  }
  
  //todas las ediciones
  getAllEdiciones(): Observable<edicionModel[]> {
    return this.http.get<edicionModel[]>(`${base_url}Ediciones`); //consigue todos los articulos
  }
  
  getEdicionActiva(): Observable<edicionModel> {
    var estado:string="true";
      return this.http.get<edicionModel>(`${base_url}Ediciones/findOne?access_token=${this.token}&filter[where][EstaActiva]=${estado}`) 
    }
    
    //Crear edicion
    crearEdicion(edicion:edicionModel): Observable<edicionModel> {
      return this.http.post<edicionModel>(`${base_url}Ediciones?access_token=${this.token}`,edicion,{
        headers:new HttpHeaders({
          "content-type":"application/json"
        })
      });
    }
    
    getEvaluadores():Observable<userModel[]> {
      var rol:string="evaluador";
        return this.http.get<userModel[]>(`${base_url}Users?access_token=${this.token}&filter[where][rol]=${rol}`) 
      }
  
    
    actualizarEdicion(edicion:edicionModel): Observable<edicionModel> {
      return this.http.put<edicionModel>(`${base_url}Ediciones?access_token=${this.token}`,edicion,
      {
        headers:new HttpHeaders({
          "content-type":"application/json"
        })
      });
    }
    
    desactivarEdicion(edicionActiva:edicionModel): Observable<edicionModel> {
      edicionActiva.EstaActiva="false";
      return this.http.put<edicionModel>(`${base_url}Ediciones?access_token=${this.token}`,edicionActiva,
      {
        headers:new HttpHeaders({
          "content-type":"application/json"
        })
      });
    }
    
  }
  