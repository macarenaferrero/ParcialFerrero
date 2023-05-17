import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/class/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  constructor() { }
  @Input()  listadoPeliculas?:Pelicula[]=[];
  @Output() peliculaSeleccionada = new EventEmitter<Pelicula>();
  @Input() mostrarBoton: boolean = false;

  onPeliculaSeleccionada(pelicula: Pelicula){
    this.peliculaSeleccionada.emit(pelicula);
    console.log(pelicula.nombre)
  }

  ngOnInit(): void {
  }

}
