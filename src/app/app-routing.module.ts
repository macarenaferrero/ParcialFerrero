import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepartidoresModule } from './repartidor/repartidores.module';
import { HomeComponent } from './pages/home/home.component';
import { PizzasModule } from './pizza/pizzas.module';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { PrimerIngresoComponent } from './pages/primer-ingreso/primer-ingreso.component';
import { ErrorComponent } from './shared/error/error/error.component';
import { RepartidoresRoutingModule } from './repartidor/repartidores-routing.module';
import { AltaRepartidorComponent } from './repartidor/alta-repartidor/alta-repartidor.component';

const rutas: Routes = [
  {path: 'bienvenido', component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"registro", component:RegistroComponent},
  {path:"terminos&condiciones", component:PrimerIngresoComponent},
  {path: "busqueda", loadChildren:()=>import('./pizza/pizzas.module').then(m => PizzasModule)},
  {path: "listadoRepartidores", loadChildren:()=>import('./repartidor/repartidores.module').then(m => RepartidoresModule)},
  //Preguntar cómo hacer para que reconozca la ruta desde el RepartidoresRoutingModule
  {path: "altaRepartidor", component:AltaRepartidorComponent},
  //
  {path: '', redirectTo: '/bienvenido', pathMatch: 'full'},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
