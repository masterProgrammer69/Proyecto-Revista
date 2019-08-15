import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuarioLogueado:boolean=false;
  rol:string="";

  constructor(private servicio:UserService, private router:Router) { }

  ngOnInit() {
    this.mostrarMenu();
  }

  mostrarMenu():void{
    let userInfo=this.servicio.getInformacionUser();
    this.rol=this.servicio.getRol();
    if(userInfo==null)
    {
      this.usuarioLogueado=false;
    }else
    {
      this.usuarioLogueado=true;
    }
    console.log("Info user: "+userInfo);
  }

  salir(){
    this.servicio.logOutUser();
    this.router.navigate(["/home"]);
  }

}
