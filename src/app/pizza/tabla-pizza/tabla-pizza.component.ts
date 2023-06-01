import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pizza } from 'src/app/class/pizza';

@Component({
  selector: 'app-tabla-pizza',
  templateUrl: './tabla-pizza.component.html',
  styleUrls: ['./tabla-pizza.component.css']
})
export class TablaPizzaComponent implements OnInit {

  constructor() { }
  @Input()  listadoPizzas?:Pizza[]=[];
  @Output() pizzaSeleccionada = new EventEmitter<Pizza>();
  @Input() mostrarBoton: boolean = false;

  onPizzaSeleccionada(pizza: Pizza){
    this.pizzaSeleccionada.emit(pizza);
    console.log(pizza.nombre)
  }

  ngOnInit(): void {
  }

}
