import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaPizzaComponent } from './alta-pizza/alta-pizza.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ListadoPizzasComponent } from './listado-pizzas/listado-pizzas.component';
import { AdministradoresGuard } from './administradores.guard';
import { EmpleadosGuard } from './empleados.guard';

const rutas: Routes = [
  {path: '', component:BusquedaComponent, canActivate:[AdministradoresGuard]},
  {path: 'listadoPizzas', component:ListadoPizzasComponent, canActivate:[EmpleadosGuard]},
  {path: 'pizza/altaPizza', component:AltaPizzaComponent, canActivate:[EmpleadosGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class PizzasRoutingModule { }
