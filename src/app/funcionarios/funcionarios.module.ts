import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosComponent } from './components';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FuncionariosComponent
  ],
  exports: [
  FuncionariosComponent
  ]
})
export class FuncionariosModule { }
