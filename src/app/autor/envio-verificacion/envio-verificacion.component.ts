import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/servicios/email.service';
import { emailModel } from 'src/app/models/email.model';

@Component({
  selector: 'app-envio-verificacion',
  templateUrl: './envio-verificacion.component.html',
  styleUrls: ['./envio-verificacion.component.css']
})
export class EnvioVerificacionComponent implements OnInit {

  constructor(private emailS: EmailService) { }
  email: emailModel = {
    response: "",
  };

  ngOnInit() {
  }


  //Revise y analize si se envian bien los correos, solo requiere 3 parametros
  enviaCorreo(): void {

    let tema="Envio de correo";
    let mensaje="Esta es una prueba del envio de correo de la pagina";
    let emailDestinatario="b7964077@urhen.com";

    this.emailS.enviarEmail(mensaje,tema,emailDestinatario).subscribe(item => {
      console.log(item);
    });
  }






}


