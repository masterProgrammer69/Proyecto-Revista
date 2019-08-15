import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.component.html',
  styleUrls: ['./verificacion.component.css']
})
export class VerificacionComponent implements OnInit {

  
  constructor(private route:ActivatedRoute,private servicio: UserService) { }

  idToken:string="";

  ngOnInit() {
    this.idToken=this.getUrlParameter("token");
  }

  getUrlParameter = (token: string)=>{
    return this.route.snapshot.paramMap.get(token);
  }

  cambiaEstado():void{
    this.servicio.guardarToken(this.idToken);
  }


  //Para autor y editor, cambiar el emailVerified de un usuario especifico
  //Cambiar la info para un evaluador

}
