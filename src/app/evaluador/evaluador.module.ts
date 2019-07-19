import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluadorRoutingModule } from './evaluador-routing.module';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule
  ]
})
export class EvaluadorModule { }
