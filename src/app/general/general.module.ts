import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CambiarPasswordComponent } from './cambiar-password/cambiar-password.component';

@NgModule({
  declarations: [HomeComponent,NotFoundComponent, CambiarPasswordComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[HomeComponent,NotFoundComponent, CambiarPasswordComponent]
})
export class GeneralModule { }