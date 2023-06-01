import { Component } from '@angular/core';
import { Pizza } from 'src/app/class/pizza';

@Component({
  selector: 'app-listado-pizzas',
  templateUrl: './listado-pizzas.component.html',
  styleUrls: ['./listado-pizzas.component.css']
})
export class ListadoPizzasComponent {
  listadoPizzas:Pizza[]= []
  pizzaAMostrar?: Pizza;

}
