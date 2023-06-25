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
   return this._http.post('http://localhost:8080/api/v1/mascotas',data);

   }


   editMascota(id:number,data:any):Observable<any>
   {
   return this._http.put(`http://localhost:3000/aedmascota/${id}`,data);

   }

   listmascota(): Observable<any>
   {
    return this._http.get('http://localhost:8080/api/v1/mascotas');
   }

   deleteMascota(id:number):Observable<any>
   {

    return this._http.delete(`http://localhost:3000/aedmascota/${id}`);
   }
}
