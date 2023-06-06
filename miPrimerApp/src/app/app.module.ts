import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';

import { IndexComponent } from './layouts/index/index.component';

import { ComponentsModule } from './components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent, IndexComponent

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ComponentsModule,
    BrowserAnimationsModule,
    
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
