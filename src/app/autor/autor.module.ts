import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { EditarArticuloComponent } from './editar-articulo/editar-articulo.component';
import { RegistrarAutorComponent } from './registrar-autor/registrar-autor.component';
import { RegistrarArticuloComponent } from './registrar-articulo/registrar-articulo.component';
import { ListaResultadosComponent } from './lista-resultados/lista-resultados.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ListaResultadosComponent,ArticleListComponent, EditarArticuloComponent,RegistrarAutorComponent,RegistrarArticuloComponent, ListaResultadosComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[RegistrarAutorComponent,
    RegistrarArticuloComponent,
    ArticleListComponent,
    ListaResultadosComponent,
    EditarArticuloComponent]
})
export class AutorModule { }
