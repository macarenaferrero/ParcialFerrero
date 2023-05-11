import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pelicula } from 'src/app/class/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { EnumGeneroPeliculas } from 'src/app/utils/enum-genero-peliculas';

@Component({
  selector: 'app-modificar-pelicula',
  templateUrl: './modificar-pelicula.component.html',
  styleUrls: ['./modificar-pelicula.component.css']
})
export class ModificarPeliculaComponent implements OnInit {
  @Input() peliculaMostrar:any | Pelicula;
  @Output() onPeliculaAModificar:EventEmitter<Pelicula>= new EventEmitter();
  formModificarPelicula! : FormGroup;

  constructor(public peliculaModificada:PeliculasService, private toastr: ToastrService, private router: Router) { }


  public opcionestipos = Object.values(EnumGeneroPeliculas);




  ngOnInit(): void {
    this.formModificarPelicula = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      fechaEstreno: new FormControl('',[Validators.required]),
      cantidadPublico: new FormControl('',Validators.required),
      tipo: new FormControl('',Validators.required),
    })
  }

  updatePelicula(){
    console.log('Actualizando película');
    const datoGrabar: Pelicula = {
      id: this.peliculaMostrar.id,
      nombre: this.formModificarPelicula.get('nombre')?.value,
      fechaEstreno: this.formModificarPelicula.get('fechaEstreno')?.value,
      cantidadPublico: this.formModificarPelicula.get('cantidadPublico')?.value,
      tipo: this.formModificarPelicula.get('tipo')?.value,
    }
    this.peliculaModificada.updatePelicula(datoGrabar).then(() => {
      this.toastr.success("Pelicula guardada correctamente","Guardado");
    }).catch((error: string) => {
      this.toastr.error("Detalle "+ error, "Error");
    });
    this.router.navigate(['/busqueda']);
  }


}
