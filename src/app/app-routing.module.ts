import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralRoutingModule } from './general/general-routing.module';
import { AutorRoutingModule } from './autor/autor-routing.module';
import { GeneralModule } from './general/general.module';
import { AutorModule } from './autor/autor.module';
import { EditorModule } from './editor/editor.module';
import { EditorRoutingModule } from './editor/editor-routing.module';
import { EvaluadorRoutingModule } from './evaluador/evaluador-routing.module';
import { EvaluadorModule } from './evaluador/evaluador.module';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    
    AutorModule,
    AutorRoutingModule,
    EvaluadorModule,
    EvaluadorRoutingModule,

    EditorModule,
    EditorRoutingModule,
    GeneralModule,
    GeneralRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
