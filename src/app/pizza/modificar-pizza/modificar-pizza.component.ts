import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pizza } from 'src/app/class/pizza';
import { PizzaService } from 'src/app/services/Pizza.service';

@Component({
  selector: 'app-modificar-pizza',
  templateUrl: './modificar-pizza.component.html',
  styleUrls: ['./modificar-pizza.component.css']
})
export class ModificarPizzaComponent implements OnInit {
  @Input() pizzaAMostrar:any | Pizza;
  @Output() onPizzaAModificar:EventEmitter<Pizza>= new EventEmitter();
  formModificarPizza! : FormGroup;

  constructor(public pizzaModificada:PizzaService, private toastr: ToastrService, private router: Router) { }


  ngOnInit(): void {
    this.formModificarPizza = new FormGroup({
      nombre: new FormControl(''),
      ingredientes: new FormControl('',[Validators.required]),
      peso: new FormControl('',[Validators.required,Validators.min(500),Validators.max(1000)]),
      precio: new FormControl('',Validators.required),
    })
  }

  updatePizza(){
    console.log('Actualizando pizza');
    const datoGrabar: Pizza = {
      id: this.pizzaAMostrar.id,
      nombre: this.pizzaAMostrar.nombre,
      ingredientes: this.formModificarPizza.get('ingredientes')?.value,
      peso: this.formModificarPizza.get('peso')?.value,
      precio: this.formModificarPizza.get('precio')?.value,
    }
    this.pizzaModificada.updatePizza(datoGrabar).then(() => {
      this.toastr.success("Pizza guardada correctamente","Guardado", { timeOut: 1000 });
    }).catch((error: string) => {
      this.toastr.error("Detalle "+ error, "Error");
    });
    this.router.navigate(['/busqueda']);
  }


}
