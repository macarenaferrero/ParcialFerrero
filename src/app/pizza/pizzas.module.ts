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
import { BorrarPizzaComponent } from './borrar-pizza/borrar-pizza.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { DetallePizzaComponent } from './detalle-pizza/detalle-pizza.component';
import { ListadoPizzasComponent } from './listado-pizzas/listado-pizzas.component';
import { ModificarPizzaComponent } from './modificar-pizza/modificar-pizza.component';
import { PizzasRoutingModule } from './pizzas-routing.module';
import { TablaPizzaComponent } from './tabla-pizza/tabla-pizza.component';
import { TablaRepartidorComponent } from './tabla-repartidor/tabla-repartidor.component';



@NgModule({
  declarations: [
    BorrarPizzaComponent,
    DetallePizzaComponent,
    ModificarPizzaComponent,
    TablaPizzaComponent,
    BusquedaComponent,
    ListadoPizzasComponent,
    AltaPizzaComponent,
    TablaRepartidorComponent
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
    BorrarPizzaComponent,
    DetallePizzaComponent,
    ModificarPizzaComponent,
    TablaPizzaComponent,
    BusquedaComponent,
    ListadoPizzasComponent,
    AltaPizzaComponent,
    TablaRepartidorComponent,
  ],
})
export class PizzasModule { }
