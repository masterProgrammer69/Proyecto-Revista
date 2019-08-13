import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userModel } from 'src/app/models/user.model';
import sha256 from 'crypto-js/sha256';

@Component({
  selector: 'app-registrar-editor',
  templateUrl: './registrar-editor.component.html',
  styleUrls: ['./registrar-editor.component.css']
})
export class RegistrarEditorComponent implements OnInit {
  userFormGroup:FormGroup;

  constructor(private service:UserService, private router:Router) {
    this.userFormGroup=this.formGroupCreator();
   }
  
  formGroupCreator():FormGroup{
    return new FormGroup({
      pNombre:new FormControl('',[Validators.required]),
      sNombre:new FormControl('',[Validators.required]),
      pApellido:new FormControl('',[Validators.required]),
      sApellido:new FormControl('',[Validators.required]),
      telefono:new FormControl('',[Validators.required]),
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
        email:null,
        password:cryptedPassword,
        pais:"string",//this.pais.value,
        nivelDeFormacion:"string",//this.formacion.value,
        rol:"autor",
        emailVerified: false,
        afiliacion:"string",
        id:null
      }

      this.service.crearUsuario(autor).subscribe(()=>{
        this.service.loginUser(cryptedPassword, this.email.value).subscribe(item =>{
          //this.service.guardarToken(item.id);
          //this.service.guardarInformacionUser(item);
          this.router.navigate(["envio-verificacion"]);
        }, (err) => {
        });
        this.router.navigate(["home"]);
      });
    }else{
      alert("No se puede registrar el usuario, la informacion esta incompleta o erronea!")
    }
  }

}

