import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { VentanaPruebaComponent } from 'src/app/ventana-prueba/ventana-prueba.component';
import { VentanaHijaComponent } from 'src/app/ventana-hija/ventana-hija.component';
import { MascotasComponent } from 'src/app/pages/mascotas/mascotas.component';








 export const IndexRoutingModule: Routes = [
  { path: 'profile',      component: VentanaPruebaComponent },
  { path: 'dashboard',   component: VentanaHijaComponent },
  { path: 'mascotas',    component: MascotasComponent },
  // { path: 'icons',          component: IconsComponent },
  // { path: 'maps',           component: MapsComponent }
];
