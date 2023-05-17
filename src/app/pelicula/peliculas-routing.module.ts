import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaPeliculaComponent } from './alta-pelicula/alta-pelicula.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';

const rutas: Routes = [
  {path: '', component:BusquedaComponent},
  {path: 'pelicula/listadoPeliculas', component:ListadoPeliculasComponent},
  {path: 'pelicula/altaPelicula', component:AltaPeliculaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
