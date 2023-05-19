import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pizza } from 'src/app/class/pizza';
import { PizzaService } from 'src/app/services/Pizza.service';
import { EnumGeneroPeliculas } from 'src/app/utils/enum-genero-peliculas';

@Component({
  selector: 'app-pizza-pelicula',
  templateUrl: './modificar-pizza.component.html',
  styleUrls: ['./modificar-pizza.component.css']
})
export class ModificarPizzaComponent implements OnInit {
  @Input() pizzaAMostrar:any | Pizza;
  @Output() onPizzaAModificar:EventEmitter<Pizza>= new EventEmitter();
  formModificarPizza! : FormGroup;

  constructor(public pizzaModificada:PizzaService, private toastr: ToastrService, private router: Router) { }


  public opcionestipos = Object.values(EnumGeneroPeliculas);




  ngOnInit(): void {
    this.formModificarPizza = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      ingredientes: new FormControl('',[Validators.required]),
      peso: new FormControl('',Validators.required),
      precio: new FormControl('',Validators.required),
    })
  }

  updatePizza(){
    console.log('Actualizando pizza');
    const datoGrabar: Pizza = {
      id: this.pizzaAMostrar.id,
      nombre: this.pizzaAMostrar.nombre,
      ingredientes: this.pizzaAMostrar.get('ingredientes')?.value,
      peso: this.pizzaAMostrar.get('peso')?.value,
      precio: this.pizzaAMostrar.get('precio')?.value,
    }
    this.pizzaAMostrar.updatePizza(datoGrabar).then(() => {
      this.toastr.success("Pizza guardada correctamente","Guardado", { timeOut: 1000 });
    }).catch((error: string) => {
      this.toastr.error("Detalle "+ error, "Error");
    });
    this.router.navigate(['/busqueda']);
  }


}
