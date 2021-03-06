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

  correo: string = "";
  password: string = "";

  constructor(private servicio: UserService, private router: Router) { }

  ngOnInit() {
  }
  
  //Se encripta la contraseña, se envia al servicio con el correo par loguearse
  //Por ultimo se redirige a el modulo que le corresponde a cada usuario
  loginUser(): void {
    let cryptedPassword = sha256(this.password).toString();
    console.log("contraseña cifrada en  sha256:" + cryptedPassword);
    this.servicio.loginUser(cryptedPassword, this.correo).subscribe(item => {

      let boolCorreo: string = JSON.stringify(item.emailVerified);

      if (item.user.emailVerified == false) {
        alert("El usuario no ha verificado su correo")
      }
      else {
        this.servicio.guardarToken(item.id);
        this.servicio.guardarRol(item.user.rol);
        this.servicio.guardarUserId(item.user.id);
        this.servicio.guardarInformacionUser(item);

        if (this.servicio.getRol() == "autor") {
          this.router.navigate(["/autor/lista-de-articulos"]);
        }
        else if (this.servicio.getRol() == "editor") {
          this.router.navigate(["/editor"]);
        }
        else if (this.servicio.getRol() == "evaluador") {
          alert("Falta implementar esto")
          //this.router.navigate(["/"]);
        }
      }



    }, (err) => {
      alert("El Correo o el Email son incorrectos, porfavor verifiquelos!")
    });
  }
}
