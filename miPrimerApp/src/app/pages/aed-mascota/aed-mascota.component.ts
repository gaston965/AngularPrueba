import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MascotasService } from 'src/app/services/mascotas.service';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import {MatRadioModule} from '@angular/material/radio';


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
          sexo:'',
          especie:'',
          color:'',
          fechaDeNacimiento:'',
          peso:''






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
          
       })}
    }
      
  
    imageUrl: string | ArrayBuffer | null = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
    selectedFile: File | null = null;
    handleImageClick() {
      // Aquí puedes realizar cualquier acción necesaria al hacer clic en la imagen.
      console.log('Haz hecho clic en la imagen');
    }
    
    handleFileInput(event: any) {
      const file = event.target.files[0];
      this.selectedFile = file;
  
      const reader = new FileReader();
  
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
        // Aquí puedes realizar cualquier acción necesaria con la URL de la imagen cargada.
        console.log('URL de la imagen cargada:', this.imageUrl);
      };
  
      reader.readAsDataURL(file);
    }
  
  
  }
