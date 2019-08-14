import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluadorRoutingModule } from './evaluador-routing.module';
import { FormComponent } from './form/form.component';
import { HomeEvaluadorComponent } from './home-evaluador/home-evaluador.component';

@NgModule({
  declarations: [FormComponent, HomeEvaluadorComponent],
  imports: [
    CommonModule
  ]
})
export class EvaluadorModule { }
