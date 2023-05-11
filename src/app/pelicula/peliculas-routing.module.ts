import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ErrorComponent } from '../shared/error/error/error.component';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { AltaPeliculaComponent } from './alta-pelicula/alta-pelicula.component';

const rutas: Routes = [
  {path: '', component:BusquedaComponent},
  {path: 'pelicula/listadoPeliculas', component:ListadoPeliculasComponent},
  {path: 'pelicula/altaPelicula', component:AltaPeliculaComponent},
  //{path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
