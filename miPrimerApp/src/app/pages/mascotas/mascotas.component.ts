import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { AedMascotaComponent } from 'src/app/pages/aed-mascota/aed-mascota.component';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent {

  constructor(private _dialog:MatDialog){}
  openAddEditEmpForm() {
    this._dialog.open(AedMascotaComponent);
  }
  

}
