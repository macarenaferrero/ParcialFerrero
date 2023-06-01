import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pizza } from 'src/app/class/pizza';
import { PizzaService } from 'src/app/services/Pizza.service';

@Component({
  selector: 'app-borrar-pizza',
  templateUrl: './borrar-pizza.component.html',
  styleUrls: ['./borrar-pizza.component.css']
})
export class BorrarPizzaComponent implements OnInit {
  @Input() pizzaAMostrar?: Pizza;
  @Output() onPizzaABorrar:EventEmitter<Pizza>= new EventEmitter();
  constructor(public pizzaABorrar:PizzaService) { }

  ngOnInit(): void {
  }
  borrarPizza(pizza:Pizza){
    this.pizzaABorrar.deletePizza(pizza.id??"");
    this.onPizzaABorrar.emit(pizza);


  }
}

