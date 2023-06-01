import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pizza } from 'src/app/class/pizza';

@Component({
  selector: 'app-detalle-pizza',
  templateUrl: './detalle-pizza.component.html',
  styleUrls: ['./detalle-pizza.component.css']
})
export class DetallePizzaComponent implements OnInit {
  @Input() pizzaAMostrar?: Pizza;
  @Output() onPizzaAAMostrar:EventEmitter<Pizza>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
