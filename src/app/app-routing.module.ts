import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepartidoresModule } from './actor/repartidores.module';
import { HomeComponent } from './pages/home/home.component';
import { PeliculasModule } from './pelicula/pizzas.module';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';

const rutas: Routes = [
  {path: 'bienvenido', component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"registro", component:RegistroComponent},
  {path: "busqueda", loadChildren:()=>import('./pelicula/pizzas.module').then(m => PeliculasModule)},
  {path: "listadoRepartidores", loadChildren:()=>import('./actor/repartidores.module').then(m => RepartidoresModule)},
  {path: '', redirectTo: '/bienvenido', pathMatch: 'full'},
  //{path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
