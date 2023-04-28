import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/class/pelicula';
import { EnumGeneroPeliculas } from 'src/app/utils/enum-genero-peliculas';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  peliculas: Pelicula[]=[
    {id: 1, nombre: 'Sonic', tipo: EnumGeneroPeliculas.PelicularOtros, fechaEstreno:'18/02/2020', cantidadPublico:2500, fotoPelicula:'https://es.web.img2.acsta.net/pictures/19/11/12/12/25/0815514.jpg'},
    {id: 2, nombre: 'Thor ', tipo: EnumGeneroPeliculas.PelicularOtros, fechaEstreno:'07/06/2004', cantidadPublico:1000, fotoPelicula:'https://lumiere-a.akamaihd.net/v1/images/56015l02_bigsal_argentina_intpayoff_4x5_b6776139.jpeg'},
    {id: 3, nombre: 'Avatar', tipo: EnumGeneroPeliculas.PelicularAmor, fechaEstreno:'16/12/2007', cantidadPublico:5860, fotoPelicula:'https://www.ecartelera.com/carteles/4200/4261/002_p.jpg'},
    {id: 4, nombre: '1917', tipo: EnumGeneroPeliculas.PelicularTerror, fechaEstreno:'21/05/2010', cantidadPublico:1089, fotoPelicula:'https://es.web.img3.acsta.net/pictures/20/01/09/15/10/0234685.jpg'}

  ];

  peliculaMostrar?:Pelicula;
  hayPeliculaAmostrar:boolean = false;

  mostrarPelicula(pelicula:Pelicula){
    this.peliculaMostrar = pelicula;
    this.hayPeliculaAmostrar = true;
  }

  borrarPelicula = (pelicula:Pelicula)=>{
  const nuevoListadoPeliculas = this.peliculas.filter((p)=>{
   return p.id !== pelicula.id
  });
    this.peliculas = nuevoListadoPeliculas;
  this.hayPeliculaAmostrar = false;

  };

  modificarPelicula = (pelicula:Pelicula) => {
    const nuevoListadoPeliculas = this.peliculas.map((p) => {
      if (p.id === pelicula.id) {
        p.nombre === pelicula.nombre;
        p.cantidadPublico === pelicula.cantidadPublico;
        p.fechaEstreno === pelicula.fechaEstreno;
        p.tipo === pelicula.tipo;
        return pelicula;
      } else {
        return p; // Devuelve el elemento sin modificar si el id no coincide
      }
    });
  
    this.peliculas = nuevoListadoPeliculas; // Actualiza el arreglo original
    this.hayPeliculaAmostrar = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
