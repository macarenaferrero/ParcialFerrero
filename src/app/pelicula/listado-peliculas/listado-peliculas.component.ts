import { Component } from '@angular/core';
import { Pelicula } from 'src/app/class/pizza';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent {
  listadoPeliculas:Pelicula[]= []
  peliculaMostrar?: Pelicula;

}
