import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Repartidor } from 'src/app/class/repartidor';
import { Pais } from 'src/app/class/pais';
import {RepartidorService } from 'src/app/services/repartidor.service';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.css']
})
export class AltaRepartidorComponent implements OnInit {
  public pais?:Pais;
  formAltaRepartidor! : FormGroup;
  repartidorNuevo!: Repartidor;
  constructor(public repartidor: RepartidorService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.formAltaRepartidor = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      DNI: new FormControl('',[Validators.required]),
      edad: new FormControl('',Validators.required),
      nacionalidad: new FormControl('',Validators.required),
      capacidadTransporte: new FormControl('',Validators.required),
      unidadPropia: new FormControl('',Validators.required)
    })
  }

  enviarForm(){
    console.log(this.formAltaRepartidor.value);
    console.log(this.pais);
  }

  mostrarPais(paisNombre:Pais){
    this.pais=paisNombre;
    this.formAltaRepartidor.controls['nacionalidad'].setValue(this.pais);
  }


  registrar(){
    console.log('Guardando Repartidor');
    const datoGrabar: Repartidor = {
      nombre: this.formAltaRepartidor.get('nombre')?.value,
      DNI: this.formAltaRepartidor.get('DNI')?.value,
      edad: this.formAltaRepartidor.get('edad')?.value,
      capacidadTransporte: this.formAltaRepartidor.get('capacidadTransporte')?.value,
      unidadPropia: this.formAltaRepartidor.get('unidadPropia')?.value,
      nacionalidad:this.formAltaRepartidor.get('nacionalidad')?.value
    }
    this.repartidor.crearRepartidor(datoGrabar).then(() => {
      this.toastr.success("Repartidor creado correctamente","Guardado", { timeOut: 1500 });
    }).catch((error: string) => {
      this.toastr.error("Detalle: "+ error, "Error");
    });
    this.router.navigate(['/listadoRepartidores']);
  }

}
