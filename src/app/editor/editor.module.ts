import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { RegistrarEditorComponent } from './registrar-editor/registrar-editor.component';
import { HomeEditorComponent } from './home-editor/home-editor.component';
import { EdicionesComponent } from './ediciones/ediciones.component';
import { CrearEdicionComponent } from './crear-edicion/crear-edicion.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { InvitarEvaluadorComponent } from './invitar-evaluador/invitar-evaluador.component';


@NgModule({
  declarations: [RegistrarEditorComponent, HomeEditorComponent, EdicionesComponent, CrearEdicionComponent, InvitarEvaluadorComponent],
  imports: [
    CommonModule,
    EditorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditorModule { }
