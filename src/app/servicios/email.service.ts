import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { edicionModel } from '../models/edicion.model';
import { UserService } from './user.service';
import { retry, catchError } from 'rxjs/operators';
import { userModel } from '../models/user.model';
import { emailModel } from '../models/email.model';

const url_base: string = 'http://localhost:3000/api/'

@Injectable({
  providedIn: 'root'
})


export class EmailService {

  token: string;
  constructor(private http: HttpClient, private service: UserService) {
    this.token = this.service.getToken();
  }


  //Crear edicion
  enviarEmail(message:string,subject:string,email:string): Observable<emailModel> {

    return this.http.get<emailModel>(`${url_base}Autores/sendEmail?message=${message}&subject=${subject}&emailAddresses=${email}`);

}
}



