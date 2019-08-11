import { Component, OnInit } from '@angular/core';
import { UserService } from '../../servicios/user.service';
import { Router } from '@angular/router';
import sha256 from 'crypto-js/sha256';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  correo:string = "";
  password:string = "";
  
  constructor(private servicio:UserService, private router:Router) { }
  
  ngOnInit() {  
  }
  
  loginUser():void{
    let cryptedPassword= sha256(this.password).toString();
    console.log("contraseña cifrada en  sha256:"+cryptedPassword);
    this.servicio.loginUser(cryptedPassword, this.correo).subscribe(item =>{
      this.servicio.guardarToken(item.id);
      this.servicio.guardarInformacionUser(item);
      this.router.navigate(["/autor/lista-de-articulos"]);
      console.log("Datos correctos!!!")
    }, (err) => {
      alert("Datos inválidos!!!")
    });
  }
}
