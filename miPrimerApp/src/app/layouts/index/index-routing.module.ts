import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { VentanaPruebaComponent } from 'src/app/ventana-prueba/ventana-prueba.component';








 export const IndexRoutingModule: Routes = [
  { path: 'dashboard',      component: VentanaPruebaComponent },
  // { path: 'user-profile',   component: UserProfileComponent },
  // { path: 'tables',         component: TablesComponent },
  // { path: 'icons',          component: IconsComponent },
  // { path: 'maps',           component: MapsComponent }
];
