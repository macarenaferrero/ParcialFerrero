import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pelicula } from 'src/app/class/pizza';
import { PeliculasService } from 'src/app/services/Pizza.service';
import { EnumGeneroPeliculas } from 'src/app/utils/enum-genero-peliculas';


@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css']
})
export class AltaPeliculaComponent {
  formAltaPelicula! : FormGroup;
  public opcionestipos = Object.values(EnumGeneroPeliculas);
  urlFoto?: string;
  public obtengoFile?:string;

constructor(public pelicula: PeliculasService, private toastr: ToastrService, private router: Router,
  private firestore: Firestore,){}

ngOnInit(): void {
  this.formAltaPelicula = new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    fechaEstreno: new FormControl('',[Validators.required]),
    tipo: new FormControl('',Validators.required),
    cantidadPublico: new FormControl('',Validators.required),
    fotoPelicula: new FormControl(''),
    actor: new FormControl('',Validators.required)

  })
}

registrar(){
  console.log('Guardando Pelicula');

  const datoGrabar: Pelicula = {
    nombre: this.formAltaPelicula.get('nombre')?.value,
    fechaEstreno: this.formAltaPelicula.get('fechaEstreno')?.value,
    tipo: this.formAltaPelicula.get('tipo')?.value,
    cantidadPublico: this.formAltaPelicula.get('cantidadPublico')?.value,
    fotoPelicula: this.formAltaPelicula.get('fotoPelicula')?.value
  }
  this.pelicula.crearPelicula(datoGrabar).then(() => {
    this.toastr.success("Pelicula creada correctamente","Guardado", { timeOut: 1000 });
  }).catch((error: string) => {
    this.toastr.error("Detalle: "+ error, "Error");
  });
  this.router.navigate(['/busqueda']);
}



}
