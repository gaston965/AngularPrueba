import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { VentanaPruebaComponent } from 'src/app/ventana-prueba/ventana-prueba.component';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [VentanaPruebaComponent],
  imports: [
    RouterModule.forChild(IndexRoutingModule),
    CommonModule,MatToolbarModule,MatIconModule,MatDialogModule
    
  ]
})
export class IndexModule { }
