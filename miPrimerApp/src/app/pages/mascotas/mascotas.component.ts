import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { AedMascotaComponent } from 'src/app/pages/aed-mascota/aed-mascota.component';
import { MascotasService } from 'src/app/services/mascotas.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface MascotaInterface {
  nombre: string;
  edad: number;
  raza: string;
  peso: number;
  fechaDeNacimiento:string;
  id:string;
}


@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {

  displayedColumns: string[] = [ 'nombre', 'edad', 'raza','peso','fechaDeNacimiento','id'];
  dataSource!: MatTableDataSource<MascotaInterface>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog:MatDialog, private _empService:MascotasService){}
  openAddEditEmpForm() {
    this._dialog.open(AedMascotaComponent);
  } 
 
 
  ngOnInit(): void {
    this.listmascota();
  }
  listmascota()
  {
    this._empService.listmascota().subscribe({
      next:(res)=> {
       
      
        this.dataSource = new MatTableDataSource(res);
        // console.log(this.dataSource)
        this.dataSource.sort=this.sort;
        
        this.dataSource.paginator = this.paginator;
       
      },
      error:(err) => {
        console.log(err)
      },



    })
  }
  
applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }


}
}