import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Repartidor } from 'src/app/class/repartidor';
import { RepartidorService } from 'src/app/services/repartidor.service';

@Component({
  selector: 'app-tabla-repartidor',
  templateUrl: './tabla-repartidor.component.html',
  styleUrls: ['./tabla-repartidor.component.css']
})
export class TablaActorComponent {
suscripcion! : Subscription;
repartidores:Array<any>=[];
actorSeleccionado?:Repartidor;

 @Output()  eventoRepartidorSeleccionado : EventEmitter<Repartidor> = new EventEmitter<Repartidor>();

constructor(public repartidorService: RepartidorService){
}

ngOnInit(): void{
this.traerRepartidor();
}

traerRepartidor(){
  this.repartidores=[];
    this.repartidorService.getListadoRepartidores().subscribe(
      (data:any) => {
        this.repartidores=[];
        for (let index = 0; index < data.length; index++) {
          const unRepartidor = data[index];
          let nombre = unRepartidor.nombre;
          let edad = unRepartidor.edad;
          let nacionalidad = unRepartidor.nacionalidad;
          let unidadPropia = unRepartidor.unidadPropia;
          let capacidadTransporte = unRepartidor.capacidadTransporte;
          let DNI = unRepartidor.DNI;
          let repartidorNuevo: Repartidor = {
            nombre:nombre,
            edad:edad,
            nacionalidad:nacionalidad,
            unidadPropia:unidadPropia,
            capacidadTransporte:capacidadTransporte,
            DNI:DNI
          }
          this.repartidores.push(repartidorNuevo);
        }
      }
    );
}



emitirRepartidor(repartidor: Repartidor) {
  console.log("Repartidor clickeado " + repartidor.nombre);
  this.eventoRepartidorSeleccionado.emit(repartidor);
}

onDestroy(): void {
  this.suscripcion.unsubscribe();
}

}

//Shortcut para acomodar el código: Ctrl + K + F
