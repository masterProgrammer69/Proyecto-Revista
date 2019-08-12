import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { RegistrarEditorComponent } from './registrar-editor/registrar-editor.component';
import { HomeEditorComponent } from './home-editor/home-editor.component';
import { EdicionesComponent } from './ediciones/ediciones.component';
import { DetallesArticuloComponent } from './detalles-articulo/detalles-articulo.component';
import { CrearEdicionComponent } from './crear-edicion/crear-edicion.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [RegistrarEditorComponent, HomeEditorComponent, EdicionesComponent, DetallesArticuloComponent, CrearEdicionComponent],
  imports: [
    CommonModule,
    EditorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditorModule { }
