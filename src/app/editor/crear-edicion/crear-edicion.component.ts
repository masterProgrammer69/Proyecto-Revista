import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { articuloModel } from 'src/app/models/articulo.model';
import { AutorService } from 'src/app/servicios/articulo.service';

@Component({
  selector: 'app-crear-edicion',
  templateUrl: './crear-edicion.component.html',
  styleUrls: ['./crear-edicion.component.css']
})
export class CrearEdicionComponent implements OnInit {
  edicionFormGroup: FormGroup;

  formGroupCreator(): FormGroup {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      volumen: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),

    });
  }

  get Nombre() {
    return this.edicionFormGroup.get('nombre');
  }

  get Volumen() {
    return this.edicionFormGroup.get('volumen');
  }

  get Descripcion() {
    return this.edicionFormGroup.get('descripcion');
  }

  constructor(private userService: UserService, private service: AutorService, private router: Router) {
    this.edicionFormGroup = this.formGroupCreator();
  }

  ngOnInit() {
  }

  guardarArticulo(): void {
    if (this.edicionFormGroup.valid) {


    }

  }

  prueba():void{
    if (this.edicionFormGroup.valid) {
     alert("Funciono")
    }
    else{
      alert("Error")
    }
  }
}

