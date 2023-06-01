import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Pizza } from 'src/app/class/pizza';
import { PizzaService } from 'src/app/services/Pizza.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  pizzas: Pizza[] = [];
  suscripcion: Subscription = new Subscription();
  pizzaAMostrar?: Pizza;
  hayPizzaAMostrar: boolean = false;
  mostrarBoton = true;

  mostrarPizza(pizza: Pizza) {
    this.pizzaAMostrar = pizza;
    this.hayPizzaAMostrar = true;
  }

  borrarPizza = (pizza: Pizza) => {
    const nuevoListadoPizzas = this.pizzas.filter((p) => {
      return p.id !== pizza.id
    });
    this.pizzas = nuevoListadoPizzas;
    this.hayPizzaAMostrar = false;

  };

  modificarPizza = (pizza: Pizza) => {
    const nuevoListadoPizzas = this.pizzas.map((p) => {
      if (p.id === pizza.id) {
        p.nombre === pizza.nombre;
        p.ingredientes === pizza.ingredientes;
        p.peso === pizza.peso;
        p.precio === pizza.precio;
        return p;
      } else {
        return p; // Devuelve el elemento sin modificar si el id no coincide
      }
    });

    this.pizzas = nuevoListadoPizzas; // Actualiza el arreglo original
    this.hayPizzaAMostrar = false;
  }

  constructor(public pizzaService: PizzaService, private toastr: ToastrService,
     private afAuth: AngularFireAuth, private router:Router) { }

  getPizzas() {
    this.suscripcion = this.pizzaService.getPizzas().subscribe((respuesta) => {
      this.pizzas = [];
      respuesta.forEach((pizza: any) => {
        this.pizzas.push({
          ...pizza
        })
      });
    });
    this.hayPizzaAMostrar = false;
    this.pizzaAMostrar = undefined;
    this.toastr.success("Pizzas cargadas correctamente", "Cargado", { timeOut: 1000 });
  }



  ngOnInit(): void {
  this.getPizzas();
  }



  ngOnDestroy() {
    this.suscripcion.unsubscribe();
  }

}
