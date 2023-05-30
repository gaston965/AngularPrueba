import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { sidebarcomponent } from './components/sidebar/sidebar.component';
// import { ChildComponent } from './components/navbar/header/header.component';
import { VentanaPruebaComponent } from './ventana-prueba/ventana-prueba.component';
import { VentanaHijaComponent } from './ventana-hija/ventana-hija.component';
import { IndexComponent } from './layouts/index/index.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComponentsModule } from './components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { AedMascotaComponent } from './pages/aed-mascota/aed-mascota.component';

@NgModule({
  declarations: [
    AppComponent, IndexComponent, MascotasComponent, AedMascotaComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ComponentsModule,
    BrowserAnimationsModule,
    MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
