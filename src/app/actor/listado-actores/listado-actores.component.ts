import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Actor } from 'src/app/class/actor';
import { Pais } from 'src/app/class/pais';
import { Pelicula } from 'src/app/class/pelicula';
import { PaisesService } from 'src/app/services/paises.service';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-listado-actores',
  templateUrl: './listado-actores.component.html',
  styleUrls: ['./listado-actores.component.css']
})
export class ListadoActoresComponent {
  peliculas: Pelicula[] = [];
  suscripcion: Subscription = new Subscription();
  pelicula?:Pelicula;
  peliculasPorActor?:Pelicula[];
  nacionalidadActor?:string;
  paisActor:Pais = new Pais();
  actorSeleccionado?: Actor;

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

  emitirActor(actor: Actor) {
    console.log(actor.nacionalidad);
    this.actorSeleccionado = actor;
    //const nombreActor:any = actor.nombre;
    this.peliculasPorActor = this.peliculas?.filter((pelicula:Pelicula) => pelicula.actor?.nombre == actor.nombre);
    console.log(this.peliculasPorActor);
    this.nacionalidadActor = actor.nacionalidad as string;
    this.buscarInformacionPais(this.nacionalidadActor);
  }

  buscarInformacionPais(nombrePais: string) {
    this.paisService.obtenerInformacionPais(nombrePais).subscribe(
        (data:any[]) => {
          console.log('Información del país:', data);
          //this.paisActor = data;
           this.paisActor.nombre = data[0]?.name.common;
           this.paisActor.bandera = data[0]?.flags.png;
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
