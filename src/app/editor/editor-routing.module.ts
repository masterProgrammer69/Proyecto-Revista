import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarEditorComponent } from './registrar-editor/registrar-editor.component';
import { HomeEditorComponent } from './home-editor/home-editor.component';
import { EdicionesComponent } from './ediciones/ediciones.component';
import { CrearEdicionComponent } from './crear-edicion/crear-edicion.component';


const routes: Routes = [
  {
    path:"editor/registro",
    component:RegistrarEditorComponent,
  },
  {
    path:"editor",
    component:HomeEditorComponent,
  },
  {
    path:"editor/ediciones",
    component:EdicionesComponent,
  },

  {
    path:"editor/crear_edicion",
    component:CrearEdicionComponent,
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule {
  
 }
