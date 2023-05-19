import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/class/pizza';
import { PeliculasService } from 'src/app/services/Pizza.service';

@Component({
  selector: 'app-borrar-pelicula',
  templateUrl: './borrar-pelicula.component.html',
  styleUrls: ['./borrar-pelicula.component.css']
})
export class BorrarPeliculaComponent implements OnInit {
  @Input() peliculaMostrar?: Pelicula;
  @Output() onPeliculaABorrar:EventEmitter<Pelicula>= new EventEmitter();
  constructor(public peliculaAborrar:PeliculasService) { }

  ngOnInit(): void {
  }
  borrarPelicula(pelicula:Pelicula){
    this.peliculaAborrar.deletePelicula(pelicula.id??"");
    this.onPeliculaABorrar.emit(pelicula);


  }
}

