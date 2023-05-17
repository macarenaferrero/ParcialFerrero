import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaActorComponent } from './alta-actor/alta-actor.component';
import { ListadoActoresComponent } from './listado-actores/listado-actores.component';

const rutas: Routes = [
  {path: '', component:AltaActorComponent},
  {path: 'actor/altaActor', component:AltaActorComponent},
  {path: 'actor/actorPelicula', component:ListadoActoresComponent},
  //{path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class ActoresRoutingModule { }
