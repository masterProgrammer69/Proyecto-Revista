import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { userModel } from '../models/user.model';
import { retry, catchError } from 'rxjs/operators';

const url_base: string = 'http://localhost:3000/api/'


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  //http://localhost:3000/api/Autores/sendEmail?message=porque%20no%20funciona%3B__%3B&subject=Prueba%20B&emailAddresses=b7869513%40urhen.com&access_token=MolP92FH71RBOVIDByxkWnyq4U7dfLEvh1oAET54

  

}


