import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './pelicula/busqueda/busqueda.component';
import { ActoresModule } from './actor/actores.module';
import { PeliculasModule } from './pelicula/peliculas.module';
import { SharedModule } from './shared/shared.module';
import { ErrorComponent } from './shared/error/error/error.component';
import { HomeComponent } from './pages/home/home.component';

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
