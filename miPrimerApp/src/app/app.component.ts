import { Component } from '@angular/core';
import { AedMascotaComponent } from './pages/aed-mascota/aed-mascota.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miPrimerApp';
  
 
  constructor(private _dialog:MatDialog){}
  openAddEditEmpForm() {
    this._dialog.open(AedMascotaComponent);
  }
  
  
}
