import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Repartidor } from 'src/app/class/repartidor';
import { Pais } from 'src/app/class/pais';
import { Pelicula } from 'src/app/class/pizza';
import { PaisesService } from 'src/app/services/paises.service';
import { PeliculasService } from 'src/app/services/Pizza.service';

@Component({
  selector: 'app-listado-repartidores',
  templateUrl: './listado-repartidores.component.html',
  styleUrls: ['./listado-repartidores.component.css']
})
export class ListadoRepartidoresComponent {
  peliculas: Pelicula[] = [];
  suscripcion: Subscription = new Subscription();
  pelicula?:Pelicula;
  peliculasPorActor?:Pelicula[];
  nacionalidadRepartidor?:string;
  paisRepartidor:Pais = new Pais();
  repartidorSeleccionado?: Repartidor;

  constructor(public peliculaService: PeliculasService, private toastr: ToastrService,
     public paisService: PaisesService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getPeliculas();
  }

  getPeliculas(){
    this.suscripcion = this.peliculaService.getPeliculas().subscribe((respuesta) => {
      this.peliculas = [];
      respuesta.forEach((pelicula: any) => {
        this.peliculas?.push({
          ...pelicula
        })
      });
    });
  }

  emitirRepartidor(repartidor: Repartidor) {
    console.log(repartidor.nacionalidad);
    this.repartidorSeleccionado = repartidor;
    this.nacionalidadRepartidor = repartidor.nacionalidad as string;
    this.buscarInformacionPais(this.nacionalidadRepartidor);
  }

  buscarInformacionPais(nombrePais: string) {
    this.paisService.obtenerInformacionPais(nombrePais).subscribe(
        (data:any[]) => {
          console.log('Información del país:', data);
          //this.paisRepartidor = data;
           this.paisRepartidor.nombre = data[0]?.name.common;
           this.paisRepartidor.bandera = data[0]?.flags.png;
        },
        (error) => {
          console.error('Error al obtener información del país:', error);
        }
      );
  }

  onDestroy(): void {
    this.suscripcion.unsubscribe();
  }
}
