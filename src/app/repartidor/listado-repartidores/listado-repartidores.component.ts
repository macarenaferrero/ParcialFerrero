import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Repartidor } from 'src/app/class/repartidor';
import { Pais } from 'src/app/class/pais';
import { Pizza } from 'src/app/class/pizza';
import { PaisesService } from 'src/app/services/paises.service';
import { PizzaService } from 'src/app/services/Pizza.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-listado-repartidores',
  templateUrl: './listado-repartidores.component.html',
  styleUrls: ['./listado-repartidores.component.css']
})
export class ListadoRepartidoresComponent {
  pizzas: Pizza[] = [];
  suscripcion: Subscription = new Subscription();
  pizza?:Pizza;
  nacionalidadRepartidor?:string;
  paisRepartidor:Pais = new Pais();
  repartidorSeleccionado?: Repartidor;

  constructor(public pizzaService: PizzaService, private toastr: ToastrService,
     public paisService: PaisesService, private http: HttpClient, private afAuth:AngularFireAuth, private router:Router) { }

  ngOnInit(): void {
    this.getPizzas();
  }

  getPizzas(){
    this.suscripcion = this.pizzaService.getPizzas().subscribe((respuesta) => {
      this.pizzas = [];
      respuesta.forEach((pizza: any) => {
        this.pizzas?.push({
          ...pizza
        })
      });
    });
  }

  emitirRepartidor(repartidor: Repartidor) {
    console.log(repartidor.nacionalidad);
    this.repartidorSeleccionado = repartidor;
    this.nacionalidadRepartidor = repartidor.nacionalidad as string;
    this.buscarInformacionPais(this.nacionalidadRepartidor);
  }

  buscarInformacionPais(nombrePais: string) {
    this.paisService.obtenerInformacionPais(nombrePais).subscribe(
        (data:any[]) => {
          console.log('Información del país:', data);
          //this.paisRepartidor = data;
           this.paisRepartidor.nombre = data[0]?.name.common;
           this.paisRepartidor.bandera = data[0]?.flags.png;
        },
        (error) => {
          console.error('Error al obtener información del país:', error);
        }
      );
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }
}
