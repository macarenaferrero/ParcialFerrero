import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ErrorComponent } from '../shared/error/error/error.component';

const rutas: Routes = [
  {path: '', component:BusquedaComponent},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
