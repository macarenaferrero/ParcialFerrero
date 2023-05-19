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
import { AltaPizzaComponent } from './alta-pizza/alta-pizza.component';
import { BorrarPeliculaComponent } from './borrar-pelicula/borrar-pelicula.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { DetallePeliculaComponent } from './detalle-pelicula/detalle-pelicula.component';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { ModificarPizzaComponent } from './modificar-pelicula/modificar-pelicula.component';
import { PizzasRoutingModule } from './pizzas-routing.module';
import { TablaActorComponent } from './tabla-repartidor/tabla-repartidor.component';
import { TablaPizzaComponent } from './tabla-pelicula/tabla-pizza.component';



@NgModule({
  declarations: [
    BorrarPeliculaComponent,
    DetallePeliculaComponent,
    ModificarPizzaComponent,
    TablaPizzaComponent,
    BusquedaComponent,
    ListadoPeliculasComponent,
    AltaPizzaComponent,
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
    PizzasRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  exports: [
    BorrarPeliculaComponent,
    DetallePeliculaComponent,
    ModificarPizzaComponent,
    TablaPizzaComponent,
    BusquedaComponent,
    ListadoPeliculasComponent,
    AltaPizzaComponent,
    TablaActorComponent,
  ],
})
export class PizzasModule { }
