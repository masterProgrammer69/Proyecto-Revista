import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { EditarArticuloComponent } from './editar-articulo/editar-articulo.component';
import { RegistrarAutorComponent } from './registrar-autor/registrar-autor.component';
import { RegistrarArticuloComponent } from './registrar-articulo/registrar-articulo.component';
import { ListaResultadosComponent } from './lista-resultados/lista-resultados.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { EnvioVerificacionComponent } from './envio-verificacion/envio-verificacion.component';
import { EmailNoVerificadoComponent } from './email-no-verificado/email-no-verificado.component';
import { EmailVerificadoComponent } from './email-verificado/email-verificado.component';

@NgModule({
  declarations: [ListaResultadosComponent,
    ArticleListComponent, 
    EditarArticuloComponent,
    RegistrarAutorComponent,
    RegistrarArticuloComponent,
    RegistrarAutorComponent,
    EnvioVerificacionComponent,
    EmailNoVerificadoComponent,
    EmailVerificadoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[RegistrarAutorComponent,
    RegistrarArticuloComponent,
    ArticleListComponent,
    ListaResultadosComponent,
    EditarArticuloComponent,
    RegistrarAutorComponent]
})
export class AutorModule { }
