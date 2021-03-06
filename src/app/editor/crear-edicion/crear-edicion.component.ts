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
  
  edit:edicionModel = {
    Nombre: null,
    Volumen: null,
    Descripcion: null,
    FechaLimite: null,
    EstaActiva:null,
    IdEditor: null,
  }
  
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
  
  ngOnInit() {}

  modificaEdicionActiva():void {
    this.service.getEdicionActiva().subscribe(articulo =>{
      this.edicionActiva=articulo;
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
        EstaActiva: "true",
        IdEditor: this.userService.getUserId(),
      }
      
      //Conseguimos la edicion activa
      this.service.getEdicionActiva().subscribe(edicio =>{
        this.edit=edicio;
        //Y la desactivamos
        this.service.desactivarEdicion(this.edit).subscribe(() => {
          //Procedemos a crear la nueva edicion activa
          this.service.crearEdicion(edicion).subscribe(() => {
            alert("Se han guardado los datos correctamente")
            this.router.navigate(["editor"]);         
          });
        });    
      });
    }
    else {
      alert("No se puede registrar el articulo, porfavor verifique la informacion!")
    }
  }
}