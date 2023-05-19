import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaRepartidorComponent } from './alta-repartidor/alta-repartidor.component';
import { ListadoRepartidoresComponent } from './listado-repartidores/listado-repartidores.component';

const rutas: Routes = [
  {path: '', component:ListadoRepartidoresComponent},
  {path: 'listadoRepartidores', component:ListadoRepartidoresComponent},
  {path: 'repartidor/altaRepartidor', component:AltaRepartidorComponent},
  //{path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class RepartidoresRoutingModule { }
