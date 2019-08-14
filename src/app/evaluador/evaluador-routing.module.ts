import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeEvaluadorComponent } from './home-evaluador/home-evaluador.component';

const routes: Routes = [
  {
    path:"evaluador",
    component: HomeEvaluadorComponent

  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluadorRoutingModule { }
