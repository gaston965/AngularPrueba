import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { navbarcomponent } from './navbar/navbar.component';
import { ChildComponent } from './navbar/header/header.component';
import { VentanaPruebaComponent } from './ventana-prueba/ventana-prueba.component';
import { VentanaHijaComponent } from './ventana-hija/ventana-hija.component';
import { IndexComponent } from './index/index.component';
@NgModule({
  declarations: [
    AppComponent,EmpleadosComponent,navbarcomponent,ChildComponent, VentanaPruebaComponent, VentanaHijaComponent, IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      // {path:'',component:navbarcomponent},
      // {path:'Prueba',component:VentanaPruebaComponent},
      // {path:'Hija',component:VentanaHijaComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
