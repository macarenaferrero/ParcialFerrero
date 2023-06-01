import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaRepartidorComponent } from './alta-repartidor/alta-repartidor.component';
import { ListadoRepartidoresComponent } from './listado-repartidores/listado-repartidores.component';
import { EmpleadosGuard } from '../pizza/empleados.guard';

const rutas: Routes = [
  {path: '', component:ListadoRepartidoresComponent, canActivate:[EmpleadosGuard]},
  {path: 'listadoRepartidores', component:ListadoRepartidoresComponent, canActivate:[EmpleadosGuard]},
  {path: 'altaRepartidor', component:AltaRepartidorComponent, canActivate:[EmpleadosGuard]},
  //{path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class RepartidoresRoutingModule { }
