import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralModule } from './general.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CambiarPasswordComponent } from './cambiar-password/cambiar-password.component';

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
    GeneralModule],
    exports: [RouterModule]
  })
  export class GeneralRoutingModule { }
  