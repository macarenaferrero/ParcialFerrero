import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Actor } from 'src/app/class/actor';
import { Pelicula } from 'src/app/class/pelicula';
import { ActoresService } from 'src/app/services/actores.service';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent {
suscripcion! : Subscription;
actores:Array<any>=[];
actorSeleccionado?:Actor;

 @Output()  eventoActorSeleccionado : EventEmitter<Actor> = new EventEmitter<Actor>();

constructor(public actorService: ActoresService){
}

ngOnInit(): void{
this.traerActores();
}

traerActores(){
  this.actores=[];
    this.actorService.getListadoActores().subscribe(
      (data:any) => {
        this.actores=[];
        for (let index = 0; index < data.length; index++) {
          const unActor = data[index];
          let nombre = unActor.nombre;
          let apellido = unActor.apellido;
          let nacionalidad = unActor.nacionalidad;
          let direccion = unActor.direccion;
          let email = unActor.email;
          let username = unActor.username;
          let actorNuevo: Actor = {
            nombre:nombre,
            apellido:apellido,
            nacionalidad:nacionalidad,
            direccion:direccion,
            email:email,
            username:username
          }
          this.actores.push(actorNuevo);
        }
      }
    );
}



emitirActor(actor: Actor) {
  console.log("Actor clickeado " + actor.nombre);
  this.eventoActorSeleccionado.emit(actor);
}


}

//Shortcut para acomodar el código: Ctrl + K + F
