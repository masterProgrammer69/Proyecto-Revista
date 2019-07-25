import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutorModule } from './autor.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { EditarArticuloComponent } from './editar-articulo/editar-articulo.component';
import { RegistrarAutorComponent } from './registrar-autor/registrar-autor.component';
import { RegistrarArticuloComponent } from './registrar-articulo/registrar-articulo.component';
import { ListaResultadosComponent } from './lista-resultados/lista-resultados.component';


const routes: Routes = [
  {
    path:"autor/registrar-autor",
    component:RegistrarAutorComponent
  },
  {
    path:"autor/registrar-articulo",
    component:RegistrarArticuloComponent
  },
  {
    path:"autor/lista-de-articulos/:idAutor",
    component:ArticleListComponent
  },
  {
    path:"autor/lista-de-resultados",
    component:ListaResultadosComponent
  },
  {
    path:"autor/editar-articulo/:id",
    component:EditarArticuloComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  AutorModule
  ],
  exports: [RouterModule]
})
export class AutorRoutingModule { }
