import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/class/actor';
import { Pais } from 'src/app/class/pais';
import { ActoresService } from 'src/app/services/actores.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.css']
})
export class AltaActorComponent implements OnInit {
  public pais?:Pais;
  formAltaActor! : FormGroup;
  actorNuevo!: Actor;
  constructor(public actor: ActoresService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.formAltaActor = new FormGroup({
      nombre: new FormControl('',[Validators.pattern('^[a-zA-Z]+$')]),
      apellido: new FormControl('',[Validators.pattern('^[a-zA-Z]+$')]),
      email: new FormControl('',Validators.email),
      nacionalidad: new FormControl(''),
      direccion: new FormControl('',Validators.required),
      username: new FormControl('',Validators.required)
    })
  }

  enviarForm(){
    console.log(this.formAltaActor.value);
    console.log(this.pais);
  }

  mostrarPais(paisNombre:Pais){
    this.pais=paisNombre;
    this.formAltaActor.controls['nacionalidad'].setValue(this.pais);
  }


  registrar(){
    console.log('Guardando Actor');
    const datoGrabar: Actor = {
      nombre: this.formAltaActor.get('nombre')?.value,
      apellido: this.formAltaActor.get('apellido')?.value,
      username: this.formAltaActor.get('username')?.value,
      email: this.formAltaActor.get('email')?.value,
      direccion: this.formAltaActor.get('direccion')?.value,
      nacionalidad:this.formAltaActor.get('nacionalidad')?.value
    }
    this.actor.crearActor(datoGrabar).then(() => {
      this.toastr.success("Actor creado correctamente","Guardado");
    }).catch((error: string) => {
      this.toastr.error("Detalle "+ error, "Error");
    });
    //this.rutas.navigate(['actores/listadoActores']);
  }

}
