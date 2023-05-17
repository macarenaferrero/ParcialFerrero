import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { environment } from '../../environments/environment';
import { SharedModule } from '../shared/shared.module';
import { AltaPeliculaComponent } from './alta-pelicula/alta-pelicula.component';
import { BorrarPeliculaComponent } from './borrar-pelicula/borrar-pelicula.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { DetallePeliculaComponent } from './detalle-pelicula/detalle-pelicula.component';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { ModificarPeliculaComponent } from './modificar-pelicula/modificar-pelicula.component';
import { PeliculasRoutingModule } from './peliculas-routing.module';
import { TablaActorComponent } from './tabla-actor/tabla-actor.component';
import { TablaPeliculaComponent } from './tabla-pelicula/tabla-pelicula.component';



@NgModule({
  declarations: [
    BorrarPeliculaComponent,
    DetallePeliculaComponent,
    ModificarPeliculaComponent,
    TablaPeliculaComponent,
    BusquedaComponent,
    ListadoPeliculasComponent,
    AltaPeliculaComponent,
    TablaActorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ToastrModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PeliculasRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  exports: [
    BorrarPeliculaComponent,
    DetallePeliculaComponent,
    ModificarPeliculaComponent,
    TablaPeliculaComponent,
    BusquedaComponent,
    ListadoPeliculasComponent,
    AltaPeliculaComponent,
    TablaActorComponent,
  ],
})
export class PeliculasModule { }
