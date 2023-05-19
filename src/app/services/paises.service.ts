import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }

  traerPaises(){
    const url = 'https://restcountries.com/v3.1/region/africa';

    return this.http.get(url);
  }

  obtenerInformacionPais(nombrePais: string){
    const url = `https://restcountries.com/v3.1/name/${nombrePais}`;

    return this.http.get<any[]>(url);
  }
}
