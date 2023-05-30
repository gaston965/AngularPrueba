import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { IndexRoutingModule } from './index-routing.module';
import { VentanaPruebaComponent } from 'src/app/pages/ventana-prueba/ventana-prueba.component';
import { RouterModule } from '@angular/router';
import { AedMascotaComponent } from 'src/app/pages/aed-mascota/aed-mascota.component';
import { MascotasComponent } from 'src/app/pages/mascotas/mascotas.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [VentanaPruebaComponent,AedMascotaComponent,MascotasComponent],
  imports: [
    RouterModule.forChild(IndexRoutingModule),
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatGridListModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule
    // ,MatToolbarModule,MatIconModule,MatDialogModule,MatButtonModule
    
  ]
})
export class IndexModule { }
