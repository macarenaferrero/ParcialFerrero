import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Pelicula } from 'src/app/class/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  peliculas: Pelicula[] = [];
  suscripcion: Subscription = new Subscription();
  peliculaMostrar?: Pelicula;
  hayPeliculaAmostrar: boolean = false;
  mostrarBoton = true;

  mostrarPelicula(pelicula: Pelicula) {
    this.peliculaMostrar = pelicula;
    this.hayPeliculaAmostrar = true;
  }

  borrarPelicula = (pelicula: Pelicula) => {
    const nuevoListadoPeliculas = this.peliculas.filter((p) => {
      return p.id !== pelicula.id
    });
    this.peliculas = nuevoListadoPeliculas;
    this.hayPeliculaAmostrar = false;

  };

  modificarPelicula = (pelicula: Pelicula) => {
    const nuevoListadoPeliculas = this.peliculas.map((p) => {
      if (p.id === pelicula.id) {
        p.nombre === pelicula.nombre;
        p.cantidadPublico === pelicula.cantidadPublico;
        p.fechaEstreno === pelicula.fechaEstreno;
        p.tipo === pelicula.tipo;
        return p;
      } else {
        return p; // Devuelve el elemento sin modificar si el id no coincide
      }
    });

    this.peliculas = nuevoListadoPeliculas; // Actualiza el arreglo original
    this.hayPeliculaAmostrar = false;
  }

  constructor(public peliculaService: PeliculasService, private toastr: ToastrService) { }

  getPeliculas() {
    this.suscripcion = this.peliculaService.getPeliculas().subscribe((respuesta) => {
      this.peliculas = [];
      respuesta.forEach((pelicula: any) => {
        this.peliculas.push({
          ...pelicula
        })
      });
    });
    this.hayPeliculaAmostrar = false;
    this.peliculaMostrar = undefined;
    this.toastr.success("Peliculas cargadas correctamente", "Cargado", { timeOut: 1000 });
  }



  ngOnInit(): void {
  this.getPeliculas();
  }

  ngOnDestroy() {
    // Desuscribirse al destruir el componente
    this.suscripcion.unsubscribe();
  }

}
