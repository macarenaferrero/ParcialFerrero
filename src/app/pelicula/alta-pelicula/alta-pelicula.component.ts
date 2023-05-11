import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnumGeneroPeliculas } from 'src/app/utils/enum-genero-peliculas';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css']
})
export class AltaPeliculaComponent {
  formAltaPelicula! : FormGroup;
  public opcionestipos = Object.values(EnumGeneroPeliculas);


ngOnInit(): void {
  this.formAltaPelicula = new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    fechaEstreno: new FormControl('',[Validators.required]),
    tipo: new FormControl('',Validators.required),
    cantidadPublico: new FormControl('',Validators.required),
  })

}

}
