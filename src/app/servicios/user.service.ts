import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { userModel } from '../models/user.model';
import { retry, catchError } from 'rxjs/operators';

const url_base: string = 'http://localhost:3000/api/'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loginUser(password: string, email: string): Observable<userModel> {
    try {
      return this.http.post<userModel>(`${url_base}Users/login?include=user`,
        {
          email,
          password
        },
        {
          headers: new HttpHeaders({
            "content-type": "application/json"
          })
        }).pipe(
          retry(0),
          catchError((err) => {
            console.log("error desde el servicio")
            return throwError("Error");
          })
        );
    } catch (error) {

    }
  }

  crearUsuario(user:userModel): Observable<userModel> {
    return this.http.post<userModel>(`${url_base}Users`,user,{
      headers:new HttpHeaders({
        "content-type":"application/json"
      })
    });
  }

  guardarToken(token) {
    localStorage.setItem("userTk", token);
  }

  guardarRol(rol) {
    localStorage.setItem("userRol", rol);
  }

  getToken() {
    return localStorage.getItem("userTk");
  }

  getRol() {
    return localStorage.getItem("userRol");
  }

  guardarInformacionUser(user: userModel): void {
    localStorage.setItem("userInfo", JSON.stringify(user));
  }

  getInformacionUser() {
    let userInfo = (JSON.stringify(localStorage.getItem("userInfo")));
    if (userInfo=="null") 
    {
      return null;
    }
    return userInfo;
  }

  enviarEmail(Usuario){

    
  }

  getIdUser() {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    return userInfo["id"];
  }

  logOutUser() {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("userTk");
  }
  

}
