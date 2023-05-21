import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { navbarcomponent } from './navbar/navbar.component';
import { BackgroundComponent } from './background/background.component';



@NgModule({
  declarations: [ FooterComponent,navbarcomponent, BackgroundComponent],
  imports: [
    CommonModule,
    RouterModule
  
  ]
  ,exports:
  [
    FooterComponent,navbarcomponent,BackgroundComponent
  ]

  
})
export class ComponentsModule { }
