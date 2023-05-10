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
      nacionalidad: new FormControl('', Validators.required),
      direccion: new FormControl('',Validators.required),
      username: new FormControl('',Validators.required)
    })
  }

  enviarForm(){
    console.log(this.formAltaActor.value);
  }

  mostrarPais(paisNombre:Pais){
    this.pais=paisNombre;
  }


  registar(){
    console.log('Guardando Actor');
    const datoGrabar: Actor = {
      nombre: this.formAltaActor.get('nombre')?.value,
      apellido: this.formAltaActor.get('apellido')?.value,
      username: this.formAltaActor.get('username')?.value,
      email: this.formAltaActor.get('email')?.value,
      direccion: this.formAltaActor.get('direccion')?.value,
      nacionalidad:this.formAltaActor.get('pais')?.value,
    }
    this.actor.crearActor(datoGrabar).then(() => {
      this.showSuccess();
    }).catch((error: string) => {
      this.showError(error);
    });
    //this.rutas.navigate(['actores/listadoActores']);
  }

  showSuccess() {
    this.toastr.success('Se guardó correctamente');
  }

  showError(error: string) {
    this.toastr.error('Algo salió mal. Error: ' + error);
  }



}
