import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }

  traerPaises(){
    const url = 'https://restcountries.com/v3.1/region/';

  const africaUrl = url + 'africa';
  const europeUrl = url + 'europe';

  const africaRequest = this.http.get<any[]>(africaUrl);
  const europeRequest = this.http.get<any[]>(europeUrl);

  return forkJoin([africaRequest, europeRequest]).pipe(
    map((responses) => {
      const africaCountries = responses[0].slice(0, 3);
      const europeCountries = responses[1].slice(0, 3);

      return africaCountries.concat(europeCountries);
    })
  );
  }

  obtenerInformacionPais(nombrePais: string){
    const url = `https://restcountries.com/v3.1/name/${nombrePais}`;

    return this.http.get<any[]>(url);
  }
}
