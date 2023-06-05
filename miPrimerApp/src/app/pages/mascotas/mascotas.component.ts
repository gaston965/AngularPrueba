import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { AedMascotaComponent } from 'src/app/pages/aed-mascota/aed-mascota.component';
import { MascotasService } from 'src/app/services/mascotas.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog:MatDialog, private _empService:MascotasService){}
  
  ngOnInit(): void {
    this.listmascota();
  }
  
  openAddEditEmpForm() {
    this._dialog.open(AedMascotaComponent);
  }

  listmascota()
  {
    this._empService.listmascota().subscribe({
      next(res) {
        console.log(res)
      },
      error:(err) => {
        console.log(err)
      },



    })
  }
  

}
