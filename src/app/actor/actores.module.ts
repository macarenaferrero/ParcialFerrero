import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaActorComponent } from './alta-actor/alta-actor.component';
import { TablaPaisesComponent } from './tabla-paises/tabla-paises.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActoresRoutingModule } from './actores-routing.module';
import { ListadoActoresComponent } from './listado-actores/listado-actores.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { PeliculasModule } from '../pelicula/peliculas.module';
import { DetalleNacionalidadComponent } from './detalle-nacionalidad/detalle-nacionalidad.component';
import { DetalleActorComponent } from './detalle-actor/detalle-actor.component';


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
