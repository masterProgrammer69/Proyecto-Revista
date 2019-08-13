import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EditorService } from 'src/app/servicios/editor.service';
import { edicionModel } from 'src/app/models/edicion.model';

@Component({
  selector: 'app-crear-edicion',
  templateUrl: './crear-edicion.component.html',
  styleUrls: ['./crear-edicion.component.css']
})
export class CrearEdicionComponent implements OnInit {
  edicionFormGroup: FormGroup;
  edicionActiva:edicionModel;

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

  constructor(private userService: UserService, private service: EditorService, private router: Router) {
    this.edicionFormGroup = this.formGroupCreator();
  }

  ngOnInit() {
  }

  modificaEdicionActiva():void {
    this.service.getEdicionesActiva().subscribe(articulos =>{
      this.edicionActiva=articulos[0];
      alert("el dato "+this.edicionActiva.id);
    });

    this.service.actualizarEdicion(this.edicionActiva).subscribe(item => {
      alert("Se actualizo la edicion");
    });
  }


  guardarEdicion(): void {
    if (this.edicionFormGroup.valid) {
      let edicion: edicionModel = {
        Nombre: this.Nombre.value,
        Volumen: this.Volumen.value,
        Descripcion: this.Descripcion.value,
        FechaLimite: null,
        EstaActiva: true,
        IdEditor: this.userService.getIdUser(),
      }

      //Agregar metodo que asigne solo valor true a este
      this.service.crearEdicion(edicion).subscribe(() => {
        alert("Se han guardado los datos correctamente")
        this.router.navigate(["editor"]);
      });

    }
    else {
      alert("No se puede registrar el articulo, porfavor verifique la informacion!")
    }
  }
}