import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarEditorComponent } from './registrar-editor/registrar-editor.component';
import { HomeEditorComponent } from './home-editor/home-editor.component';
import { EdicionesComponent } from './ediciones/ediciones.component';
import { CrearEdicionComponent } from './crear-edicion/crear-edicion.component';
import { AutorGuard } from '../guards/autor.guard';
import { EditorGuard } from '../guards/editor.guard';


const routes: Routes = [
  {
    path:"editor/registro",
    component:RegistrarEditorComponent,
    canActivate:[
      EditorGuard
    ]
  },
  {
    path:"editor",
    component:HomeEditorComponent,
    canActivate:[
      EditorGuard
    ]
  },
  {
    path:"editor/ediciones",
    component:EdicionesComponent,
    canActivate:[
      EditorGuard
    ]
  },

  {
    path:"editor/crear_edicion",
    component:CrearEdicionComponent,
    canActivate:[
      EditorGuard
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule {
  
 }
