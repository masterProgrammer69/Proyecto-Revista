import { Component, OnInit } from '@angular/core';
import { AutorService } from 'src/app/servicios/articulo.service';
import { articuloModel } from 'src/app/models/articulo.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AutorModule } from '../autor.module';
import { HttpClient } from '@angular/common/http';

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
      //fecha:new FormControl('',[Validators.required]),
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
  
  /*articulo:articuloModel={
    titulo:null,
    abstract:null,
    palabrasClave:null,
    id:null,
    fecha:null,
    idEdicion:null,
    idAutor:null,
    estado:"enviado"
  };*/ 
  
  constructor(private userService:UserService,private service:AutorService,private router:Router) {
    this.articuloFormGroup=this.formGroupCreator();
  }
  
  ngOnInit() {
  }
  
  guardarArticulo():void{
    if(this.articuloFormGroup.valid)
    {
      let articulo:articuloModel={
        titulo:this.Titulo.value,
        abstract:this.Abstract.value,
        palabrasClave:this.PalabrasClave.value,
        fecha:null,
        idEdicion:null,
        idAutor:null,
        estado:"enviado"
      }
      
      articulo.idAutor=this.userService.getIdUser2();
      console.log("Id autor="+articulo.idAutor);
      this.service.crearArticulo(articulo).subscribe(item=>{
        console.log("Guardando datos editados");
        this.router.navigate(["/autor/lista-de-articulos"]);
      });
    }else{
      alert("No se puede registrar el articulo, porfavor verifique la informacion!")
    }

  }
}

