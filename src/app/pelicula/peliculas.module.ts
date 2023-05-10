import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorrarPeliculaComponent } from './borrar-pelicula/borrar-pelicula.component';
import { DetallePeliculaComponent } from './detalle-pelicula/detalle-pelicula.component';
import { ModificarPeliculaComponent } from './modificar-pelicula/modificar-pelicula.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { SharedModule } from '../shared/shared.module';
import { TablaPeliculaComponent } from './tabla-pelicula/tabla-pelicula.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PeliculasRoutingModule } from './peliculas-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';



@NgModule({
  declarations: [
    BorrarPeliculaComponent,
    DetallePeliculaComponent,
    ModificarPeliculaComponent,
    TablaPeliculaComponent,
    BusquedaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ToastrModule,
    SharedModule,
    FormsModule,
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
    BusquedaComponent
  ],
})
export class PeliculasModule { }
