import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/class/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {
  @Input() peliculaMostrar?: Pelicula;
  @Output() onPeliculaAMostrar:EventEmitter<Pelicula>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
