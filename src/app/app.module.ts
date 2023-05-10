import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { TablaPeliculaComponent } from './componentes/pelicula/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './componentes/pelicula/detalle-pelicula/detalle-pelicula.component';
import { BorrarPeliculaComponent } from './componentes/pelicula/borrar-pelicula/borrar-pelicula.component';
import { ModificarPeliculaComponent } from './componentes/pelicula/modificar-pelicula/modificar-pelicula.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AltaActorComponent } from './componentes/actor/alta-actor/alta-actor.component';
import { TablaPaisesComponent } from './componentes/actor/tabla-paises/tabla-paises.component';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './shared/footer/footer.component';
const routes: Routes = [
  {path: 'bienvenido', component:AppComponent},
  {path: 'busqueda', component:BusquedaComponent},
  {path: 'altaActor', component:AltaActorComponent},
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
    ModificarPeliculaComponent,
    AltaActorComponent,
    TablaPaisesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
