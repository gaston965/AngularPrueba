import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MascotasService } from 'src/app/services/mascotas.service';
import { Dialog, DialogRef } from '@angular/cdk/dialog';


@Component({
  selector: 'app-aed-mascota',
  templateUrl: './aed-mascota.component.html',
  styleUrls: ['./aed-mascota.component.css'],
  
})
export class AedMascotaComponent {
   
  mascForm:FormGroup;

  constructor(private _fb:FormBuilder,
  private _masService:MascotasService,
  private _dialogRef:DialogRef<AedMascotaComponent>)
  {
       this.mascForm =  this._fb.group({
          nombre:'',
          edad:'',
          raza:'',
          peso:'',
          fechaDeNacimiento:''






       })

  }

  onFormSubmit()
  {
    if (this.mascForm.valid)
    {
       this._masService.Aedmascota(this.mascForm.value).subscribe({
        next: (val:any) =>
        {
          alert('Mascota agregada');
          this._dialogRef.close();
        },
         error: (err:any) =>
         {
                 console.error(err);
         }
          
       })}}}
