import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  constructor(private _http:HttpClient) { }

  Aedmascota(data:any):Observable<any>
   {
   return this._http.post('http://localhost:3000/aedmascota',data);

   }

   listmascota(): Observable<any>
   {
    return this._http.get('http://http://localhost:3000/listMascota');
   }
}
