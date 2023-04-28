import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { TablaPeliculaComponent } from './shared/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './shared/detalle-pelicula/detalle-pelicula.component';
import { BorrarPeliculaComponent } from './shared/borrar-pelicula/borrar-pelicula.component';
import { ModificarPeliculaComponent } from './shared/modificar-pelicula/modificar-pelicula.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
const routes: Routes = [
  {path: 'bienvenido', component:AppComponent},
  {path: 'busqueda', component:BusquedaComponent},
  {path: '', redirectTo: '/bienvenido', pathMatch: 'full'},
  {path: '**', redirectTo: '/bienvenido', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    BorrarPeliculaComponent,
    ModificarPeliculaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
