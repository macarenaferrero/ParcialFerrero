import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }

  traerPaises(){
    const url = 'https://restcountries.com/v3.1/all';

    return this.http.get(url);
  }

  obtenerInformacionPais(nombrePais: string){
    const url = `https://restcountries.com/v3.1/name/${nombrePais}`;

    return this.http.get<any[]>(url);
  }
}
