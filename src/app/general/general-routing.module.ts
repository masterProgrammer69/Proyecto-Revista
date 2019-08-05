import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralModule } from './general.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CambiarPasswordComponent } from './cambiar-password/cambiar-password.component';
import { ListaDeArticulosComponent } from './lista-de-articulos/lista-de-articulos.component';
import { AutorRoutingModule } from '../autor/autor-routing.module';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"cambiar-password",
    component: CambiarPasswordComponent
    
  },
  {
    path:"lista-de-articulos",
    component: ListaDeArticulosComponent
    
  },
  {
    path:"not-found",
    component:NotFoundComponent
  },
  {
    path:"",
    pathMatch:"full",
    component:HomeComponent
  },
  {
    path:"**",
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    GeneralModule,
    AutorRoutingModule],
    exports: [RouterModule]
  })
  export class GeneralRoutingModule { }
  