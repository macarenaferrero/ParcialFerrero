import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaPizzaComponent } from './alta-pizza/alta-pizza.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';

const rutas: Routes = [
  {path: '', component:BusquedaComponent},
  {path: 'listadoPizzas', component:ListadoPeliculasComponent},
  {path: 'pizza/altaPizza', component:AltaPizzaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class PizzasRoutingModule { }
