import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pizza } from 'src/app/class/pizza';
import { PizzaService } from 'src/app/services/Pizza.service';


@Component({
  selector: 'app-alta-pizza',
  templateUrl: './alta-pizza.component.html',
  styleUrls: ['./alta-pizza.component.css']
})
export class AltaPizzaComponent {
  formAltaPizza! : FormGroup;
  urlFoto?: string;
  public obtengoFile?:string;

constructor(public pizza: PizzaService, private toastr: ToastrService, private router: Router,
  private firestore: Firestore,){}

ngOnInit(): void {
  this.formAltaPizza = new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    ingredientes: new FormControl('',[Validators.required]),
    peso: new FormControl('',[Validators.required,Validators.min(500),Validators.max(1000)]),
    precio: new FormControl('',Validators.required),

  })
}

registrar(){
  console.log('Guardando Pizza');

  const datoGrabar: Pizza = {
    nombre: this.formAltaPizza.get('nombre')?.value,
    ingredientes: this.formAltaPizza.get('ingredientes')?.value,
    peso: this.formAltaPizza.get('peso')?.value,
    precio: this.formAltaPizza.get('precio')?.value,
  }
  this.pizza.crearPizza(datoGrabar).then(() => {
    this.toastr.success("Pizza creada correctamente","Guardado", { timeOut: 1000 });
    this.formAltaPizza.reset();
  }).catch((error: string) => {
    this.toastr.error("Detalle: "+ error, "Error");
  });
  this.router.navigate(['/busqueda']);
}

ngOnDestroy(): void {

}


}
