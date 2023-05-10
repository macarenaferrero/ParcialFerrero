import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Pelicula } from 'src/app/class/pelicula';
import { EnumGeneroPeliculas } from 'src/app/utils/enum-genero-peliculas';

@Component({
  selector: 'app-modificar-pelicula',
  templateUrl: './modificar-pelicula.component.html',
  styleUrls: ['./modificar-pelicula.component.css']
})
export class ModificarPeliculaComponent implements OnInit {
  @Input() peliculaMostrar:any | Pelicula;
  @Output() onPeliculaAModificar:EventEmitter<Pelicula>= new EventEmitter();

  constructor() { }


  public opcionestipos = Object.values(EnumGeneroPeliculas);

  modificarPelicula(peliculaMostrar:Pelicula){
    this.onPeliculaAModificar.emit(this.peliculaMostrar);
  }



  ngOnInit(): void {
  }

}
