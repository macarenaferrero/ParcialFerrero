import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { environment } from '../../environments/environment';
import { PizzasModule } from '../pizza/pizzas.module';
import { SharedModule } from '../shared/shared.module';
import { RepartidoresRoutingModule } from './repartidores-routing.module';
import { AltaRepartidorComponent } from './alta-repartidor/alta-repartidor.component';
import { DetalleRepartidorComponent } from './detalle-repartidor/detalle-repartidor.component';
import { DetalleNacionalidadComponent } from './detalle-nacionalidad/detalle-nacionalidad.component';
import { ListadoRepartidoresComponent } from './listado-repartidores/listado-repartidores.component';
import { TablaPaisesComponent } from './tabla-paises/tabla-paises.component';


@NgModule({
  declarations: [
    AltaRepartidorComponent,
    TablaPaisesComponent,
    ListadoRepartidoresComponent,
    DetalleNacionalidadComponent,
    DetalleRepartidorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ToastrModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    RepartidoresRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    PizzasModule
  ],
  exports: [
    AltaRepartidorComponent,
    TablaPaisesComponent,
    ListadoRepartidoresComponent

  ],
})
export class RepartidoresModule { }
