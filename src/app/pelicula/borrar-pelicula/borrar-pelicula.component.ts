import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/class/pelicula';

@Component({
  selector: 'app-borrar-pelicula',
  templateUrl: './borrar-pelicula.component.html',
  styleUrls: ['./borrar-pelicula.component.css']
})
export class BorrarPeliculaComponent implements OnInit {
  @Input() peliculaMostrar?: Pelicula;
  @Output() onPeliculaABorrar:EventEmitter<Pelicula>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  BorrarPelicula(pelicula:Pelicula){
     this.onPeliculaABorrar.emit(pelicula);
  }
}

