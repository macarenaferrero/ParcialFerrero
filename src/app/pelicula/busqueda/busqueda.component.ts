import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Pelicula, Pizza } from 'src/app/class/pizza';
import { PeliculasService } from 'src/app/services/Pizza.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  peliculas: Pelicula[] = [];
  suscripcion: Subscription = new Subscription();
  pizzaAMostrar?: Pelicula;
  hayPizzaAmostrar: boolean = false;
  mostrarBoton = true;

  mostrarPelicula(pizza: Pizza) {
    this.pizzaAMostrar = pizza;
    this.hayPizzaAmostrar = true;
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
    this.pizzaAMostrar = undefined;
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
