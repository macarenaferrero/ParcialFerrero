import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { environment } from '../../environments/environment';
import { PeliculasModule } from '../pelicula/peliculas.module';
import { SharedModule } from '../shared/shared.module';
import { ActoresRoutingModule } from './actores-routing.module';
import { AltaActorComponent } from './alta-actor/alta-actor.component';
import { DetalleActorComponent } from './detalle-actor/detalle-actor.component';
import { DetalleNacionalidadComponent } from './detalle-nacionalidad/detalle-nacionalidad.component';
import { ListadoActoresComponent } from './listado-actores/listado-actores.component';
import { TablaPaisesComponent } from './tabla-paises/tabla-paises.component';


@NgModule({
  declarations: [
    AltaActorComponent,
    TablaPaisesComponent,
    ListadoActoresComponent,
    DetalleNacionalidadComponent,
    DetalleActorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ToastrModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ActoresRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    PeliculasModule
  ],
  exports: [
    AltaActorComponent,
    TablaPaisesComponent,
    ListadoActoresComponent

  ],
})
export class ActoresModule { }
