import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const url_base: string = 'http://localhost:3000/api/'
import { userModel } from '../models/user.model';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  loginUser(password:string,email:string): Observable<userModel>{
    return this.http.post<userModel>(`${url_base}users/login?include=user`,
    {
      email,
      password
    },
    {
      headers:new HttpHeaders({
        "content-type":"application/json"
      })
    });    
  }

  guardarToken(token){
    localStorage.setItem("userTk",token);
  }

  getToken(){
    return localStorage.getItem("userTk");
  }

  guardarInformacionUser(user:userModel):void{
    localStorage.setItem("userInfo",JSON.stringify(user));
  }

  getInformacionUser(){
    let userInfo=(JSON.stringify(localStorage.getItem("userInfo")));
    if(isNullOrUndefined(userInfo))
    {
      return null;
    }
    return userInfo;
  }

  logOutUser(){
    localStorage.removeItem("userInfo");
    localStorage.removeItem("userTk");
  }

}
