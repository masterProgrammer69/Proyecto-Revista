import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesArticuloComponent } from './detalles-articulo/detalles-articulo.component';

import { RegistrarEditorComponent } from './registrar-editor/registrar-editor.component';
import { HomeEditorComponent } from './home-editor/home-editor.component';
import { EdicionesComponent } from './ediciones/ediciones.component';
import { EditorModule } from './editor.module';
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
    path:"editor/detalles_articulo/:idArticulo",
    component:DetallesArticuloComponent,
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
