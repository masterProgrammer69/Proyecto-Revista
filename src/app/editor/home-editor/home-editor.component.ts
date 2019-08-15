import { Component, OnInit } from '@angular/core';
import { edicionModel } from 'src/app/models/edicion.model';
import { EditorService } from 'src/app/servicios/editor.service';
import { articuloModel } from 'src/app/models/articulo.model';
import { AutorService } from 'src/app/servicios/autor.service';
import { userModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/servicios/user.service';
import sha256 from 'crypto-js/sha256';
import { Router } from '@angular/router';
import { emailModel } from 'src/app/models/email.model';
import { EmailService } from 'src/app/servicios/email.service';

@Component({
  selector: 'app-home-editor',
  templateUrl: './home-editor.component.html',
  styleUrls: ['./home-editor.component.css']
})
export class HomeEditorComponent implements OnInit {


  edicionActiva: edicionModel = {
    id: null,
    Nombre: null,
    Volumen: null,
    Descripcion: null,
    FechaLimite: null,
    EstaActiva: null,
    IdEditor: null,
  };
  listaArticulos: articuloModel[] = [];
  listaEvaluadores: userModel[] = [];

  articuloTemporal: articuloModel = {
    id: null,
    Titulo: null,
    Abstract: null,
    PalabrasClave: null,
    Fecha: null,
    Estado: null,
    Autor: null,
    IdEdicion: null,
  };

  mostrarEvaluadores = false;
  emailE: string;

  constructor(private ediServicio: EditorService, private autServicio: AutorService, private userService: UserService,private emailService: EmailService,private router:Router) { }

  ngOnInit() {
    this.getEdicionActiva();
    this.ediServicio.getEvaluadores().subscribe(evaluador => {
      this.listaEvaluadores = evaluador;
      console.log("lista:" + this.listaEvaluadores.length);
    });
  }


  getEdicionActiva(): void {
    this.ediServicio.getEdicionActiva().subscribe(edicion => {
      this.edicionActiva = edicion;
      this.getArticulos();
    });
  }

  getArticulos(): void {
    this.autServicio.getArticulosPorEdicion(this.edicionActiva.id).subscribe(articulos => {
      this.listaArticulos = articulos;
    });

  }

  asignaInformacionModal(idArticulo: string): void {
    this.autServicio.buscarArticulo(idArticulo).subscribe(articulo => {
      this.articuloTemporal = articulo;
    });
  }


  activarListadoEvaluadores(): void {
    this.mostrarEvaluadores = !this.mostrarEvaluadores;
  }

  desactivaListadoEvaluadores(): void {
    this.mostrarEvaluadores = !this.mostrarEvaluadores;
  }

  asignarEvaluadores(idEvaluadores: string[]): void {
    alert("Se van a asignar estos evaluadores")
  }

  asignaEvaluadorTemp(idEvaluador: string): void {
    alert("Se asigno evaluador a")
  }

  enviaCorreo(token:string): void {

    let tema="Invitacion para ser evaluador";
    let mensaje="Hola<br/><br/>Ha sido invitado a ser editor de la revista vector.<br/><br/>Si desea serlo, haga click en el siguiente link:<br/>http://localhost:4200/verificacion/"+token+"<br/><br/>De lo contrario, por favor ignore este correo.<br/><br/><br/>";
    let emailDestinatario=this.emailE;

    this.emailService.enviarEmail(mensaje,tema,emailDestinatario).subscribe(item => {
     console.log(item);
     alert("Se ha enviado la invitacion.")
    });
  }

  emailEvaluador(): void {
    let cryptedPassword = sha256("").toString();

    let autor: userModel = {
      primerNombre: "",
      segundoNombre: "",
      primerApellido: "",
      segundoApellido: "",
      telefono: "",
      email: this.emailE,
      password: cryptedPassword,
      pais: "",
      nivelDeFormacion: "",
      rol: "Evaluador",
      emailVerified: false,
      afiliacion: "",
      id: null,
      user: null
    }

    this.userService.crearUsuario(autor).subscribe(()=>{
      this.userService.loginUser(cryptedPassword, this.emailE).subscribe(item =>{

        this.enviaCorreo(item.id);
        this.router.navigate(["home"]);
      }, (err) => {
      });
      this.router.navigate(["home"]);
    });

  }
}



