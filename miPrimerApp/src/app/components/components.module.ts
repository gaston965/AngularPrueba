import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { sidebarcomponent } from './sidebar/sidebar.component';
import { BackgroundComponent } from './background/background.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [ FooterComponent,sidebarcomponent, BackgroundComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  
  ]
  ,exports:
  [
    FooterComponent,sidebarcomponent,BackgroundComponent,NavbarComponent
  ]

  
})
export class ComponentsModule { }
