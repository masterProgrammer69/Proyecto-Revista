import { Component, OnInit } from '@angular/core';
import { AutorService } from 'src/app/servicios/articulo.service';
import { articuloModel } from 'src/app/models/articulo.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-articulo',
  templateUrl: './registrar-articulo.component.html',
  styleUrls: ['./registrar-articulo.component.css']
})
export class RegistrarArticuloComponent implements OnInit {
  articuloFormGroup:FormGroup;
  
  formGroupCreator():FormGroup{
    return new FormGroup({
      titulo:new FormControl('',[Validators.required]),
      abstract:new FormControl('',[Validators.required]),
      palabrasClave:new FormControl('',[Validators.required]),
      id:new FormControl('',[]),
      fecha:new FormControl('',[]),
      idEdicion:new FormControl('',[]),
      idAutor:new FormControl('',[]),
      estado:new FormControl('',[]),
    });
  }
  
  get Titulo(){
    return this.articuloFormGroup.get('titulo');
  }
  
  get Abstract(){
    return this.articuloFormGroup.get('abstract');
  }
  
  get PalabrasClave(){
    return this.articuloFormGroup.get('palabrasClave');
  }
  
  constructor(private userService:UserService,private service:AutorService,private router:Router) {
    this.articuloFormGroup=this.formGroupCreator();
  }
  
  ngOnInit() {
  }
  
  guardarArticulo():void{
    if(this.articuloFormGroup.valid)
    {
      let articulo:articuloModel={
        Titulo:this.Titulo.value,
        Abstract:this.Abstract.value,
        PalabrasClave:this.PalabrasClave.value,
        Fecha:null,
        IdEdicion:"a",
        Autor:this.userService.getIdUser(),
        Estado:"enviado"
      }

      
      //var ObjectID = require('mongodb').ObjectID;
      //var objectId= new ObjectID();
      //articulo.IdAutor=objectId.toHexString(this.userService.getIdUser());

      // var ObjectID = require("bson-objectid");
      //articulo.IdAutor=ObjectID.createFromHexString(this.userService.getIdUser());
      
      this.service.crearArticulo(articulo).subscribe(()=>{
        alert("Se han guardado los datos")
        this.router.navigate(["autor/lista-de-articulos"]);
      });
    }else{
      alert("No se puede registrar el articulo, porfavor verifique la informacion!")
    }
    
  }
}

