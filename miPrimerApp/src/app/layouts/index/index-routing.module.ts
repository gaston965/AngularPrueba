import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { VentanaPruebaComponent } from 'src/app/ventana-prueba/ventana-prueba.component';
import { VentanaHijaComponent } from 'src/app/ventana-hija/ventana-hija.component';








 export const IndexRoutingModule: Routes = [
  { path: 'profile',      component: VentanaPruebaComponent },
  { path: 'dashboard',   component: VentanaHijaComponent },
  // { path: 'tables',         component: TablesComponent },
  // { path: 'icons',          component: IconsComponent },
  // { path: 'maps',           component: MapsComponent }
];
