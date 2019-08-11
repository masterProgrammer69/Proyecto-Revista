import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutorModule } from './autor.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { EditarArticuloComponent } from './editar-articulo/editar-articulo.component';
import { RegistrarAutorComponent } from './registrar-autor/registrar-autor.component';
import { RegistrarArticuloComponent } from './registrar-articulo/registrar-articulo.component';
import { ListaResultadosComponent } from './lista-resultados/lista-resultados.component';
import { UrlInjectionGuard } from '../guards/url-injection.guard';
import { EnvioVerificacionComponent } from './envio-verificacion/envio-verificacion.component';


const routes: Routes = [
  {
    path:"autor/registrar-autor",
    component:RegistrarAutorComponent
  },
  {
    path:"autor/registrar-articulo",
    component:RegistrarArticuloComponent,
    canActivate:[
      UrlInjectionGuard,
    ]
  },
  {
    path:"autor/lista-de-articulos",
    component:ArticleListComponent,
    canActivate:[
      UrlInjectionGuard,
    ]
  },
  {
    path:"autor/lista-de-resultados",
    component:ListaResultadosComponent,
    canActivate:[
      UrlInjectionGuard,
    ]
  },
  {
    path:"autor/editar-articulo/:idArticulo",
    component:EditarArticuloComponent,
    canActivate:[
      UrlInjectionGuard,
      
    ]
  },

    {
      path:"envio-verificacion",
      component: EnvioVerificacionComponent
    }



];

@NgModule({
  imports: [RouterModule.forChild(routes),
  AutorModule
  ],
  exports: [RouterModule]
})
export class AutorRoutingModule { }