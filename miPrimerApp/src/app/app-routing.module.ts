import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from 'src/app/layouts/index/index.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/index/index.module').then(m => m.IndexModule)
      } ]

},
{
  path: '**',
  redirectTo: 'dashboard',
}];

@NgModule({
  imports: [
 
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
