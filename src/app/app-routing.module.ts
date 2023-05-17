import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActoresModule } from './actor/actores.module';
import { HomeComponent } from './pages/home/home.component';
import { PeliculasModule } from './pelicula/peliculas.module';

const rutas: Routes = [
  {path: 'bienvenido', component:HomeComponent},
  {path: "busqueda", loadChildren:()=>import('./pelicula/peliculas.module').then(m => PeliculasModule)},
  {path: "altaActor", loadChildren:()=>import('./actor/actores.module').then(m => ActoresModule)},
  {path: '', redirectTo: '/bienvenido', pathMatch: 'full'},
  //{path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
