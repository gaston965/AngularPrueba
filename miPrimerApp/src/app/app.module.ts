import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { navbarcomponent } from './components/navbar/navbar.component';
// import { ChildComponent } from './components/navbar/header/header.component';
import { VentanaPruebaComponent } from './ventana-prueba/ventana-prueba.component';
import { VentanaHijaComponent } from './ventana-hija/ventana-hija.component';
import { IndexComponent } from './layouts/index/index.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComponentsModule } from './components/components.module';
@NgModule({
  declarations: [
    AppComponent, IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
