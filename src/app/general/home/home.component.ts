import { Component, OnInit } from '@angular/core';
import { UserService } from '../../servicios/user.service';
import { Router } from '@angular/router';


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
    this.servicio.loginUser(this.password, this.correo).subscribe(item =>{
      this.servicio.guardarToken(item.id);
      this.servicio.guardarInformacionUser(item);
      this.router.navigate(["/autor/lista-de-articulos"]);
      console.log("Datos correctos!!!")
    }, (err) => {
      console.log("Datos inválidos!!!")
    });
  }
}
