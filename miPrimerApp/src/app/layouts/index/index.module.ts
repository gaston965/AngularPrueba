import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { VentanaPruebaComponent } from 'src/app/ventana-prueba/ventana-prueba.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [VentanaPruebaComponent],
  imports: [
    RouterModule.forChild(IndexRoutingModule),
    CommonModule,
    
  ]
})
export class IndexModule { }
