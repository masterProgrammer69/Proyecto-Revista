import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userModel } from 'src/app/models/user.model';
import sha256 from 'crypto-js/sha256';
import { EmailService } from 'src/app/servicios/email.service';

@Component({
  selector: 'app-registrar-autor',
  templateUrl: './registrar-autor.component.html',
  styleUrls: ['./registrar-autor.component.css']
})
export class RegistrarAutorComponent implements OnInit {
  userFormGroup:FormGroup;

  constructor(private service:UserService,private emailService: EmailService,private router:Router) {
    this.userFormGroup=this.formGroupCreator();
   }
  
  formGroupCreator():FormGroup{
    return new FormGroup({
      pNombre:new FormControl('',[Validators.required]),
      sNombre:new FormControl('',[Validators.required]),
      pApellido:new FormControl('',[Validators.required]),
      sApellido:new FormControl('',[Validators.required]),
      telefono:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
      //pais:new FormControl('',[]),
      //formacion:new FormControl('',[]),
      //rol:new FormControl('',[])
    });
  }
  
  get pNombre(){
    return this.userFormGroup.get('pNombre');
  }

  get sNombre(){
    return this.userFormGroup.get('sNombre');
  }

  get pApellido(){
    return this.userFormGroup.get('pApellido');
  }

  get sApellido(){
    return this.userFormGroup.get('sApellido');
  }

  get email(){
    return this.userFormGroup.get('email');
  }

  get telefono(){
    return this.userFormGroup.get('telefono');
  }

  get password(){
    return this.userFormGroup.get('password');
  }

  get pais(){
    return this.userFormGroup.get('pais');
  }

  get formacion(){
    return this.userFormGroup.get('nivelDeFormacion');
  }


  ngOnInit() { }

  enviaCorreo(nombre:string,email:string,token:string): void {

    let tema="Verificacion de correo";
    let mensaje="Hola "+nombre+",<br/><br/>Gracias por registrarse a la pagina de la revista Vector.<br/><br/>Para completar su registro, haga click en el siguiente link:<br/>http://localhost:4200/verificacion/"+token+"<br/><br/>Si no ha solicitado el registro a la pagina, por favor ignore este correo.<br/><br/>¡¡Esperamos muchos articulos de su parte!!<br/>";
    let emailDestinatario=email;

    alert("Gracias por su registro, se ha enviado un mesaje de verificacion a su correo, por favor reviselo.")
    this.emailService.enviarEmail(mensaje,tema,emailDestinatario).subscribe(item => {
      console.log(item);
    });
  }

  guardarUsuario():void{
    let cryptedPassword= sha256(this.password.value).toString();

    if(this.userFormGroup.valid)
    {
      let autor:userModel={
        primerNombre:this.pNombre.value,
        segundoNombre:this.sNombre.value,
        primerApellido:this.pApellido.value,
        segundoApellido:this.sApellido.value,
        telefono:this.telefono.value,
        email:this.email.value,
        password:cryptedPassword,
        pais:"string",//this.pais.value,
        nivelDeFormacion:"string",//this.formacion.value,
        rol:"autor",
        emailVerified: false,
        afiliacion:"string",
        id:null,
        user:null
      }

      this.service.crearUsuario(autor).subscribe(()=>{
        this.service.loginUser(cryptedPassword, this.email.value).subscribe(item =>{

          this.enviaCorreo(autor.primerNombre,autor.email,item.id);
          this.router.navigate(["home"]);
        }, (err) => {
        });
        this.router.navigate(["home"]);
      });
    }else{
      alert("No se puede registrar el usuario, la informacion esta incompleta o erronea!")
    }
  }

}
