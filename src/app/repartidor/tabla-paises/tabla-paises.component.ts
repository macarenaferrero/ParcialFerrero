import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Repartidor } from 'src/app/class/repartidor';
import { Pais } from 'src/app/class/pais';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  suscripcion! : Subscription;
  repartidor?:Repartidor;
  paises:Array<any>=[];
  paisSelesccionado?:Pais;

  @Output()  eventoPaisSeleccionado : EventEmitter<Pais> = new EventEmitter<Pais>();

  constructor(public paisService: PaisesService) { }

  ngOnInit(): void {
    this.traerPaises();
  }

  onDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  traerPaises(){
    this.paises=[];
    this.paisService.traerPaises().subscribe(
      (data:any) => {
        for (let index = 0; index < data.length; index++) {
          const unPais = data[index];
          let nombre = unPais.name.common;
          let foto = unPais.flags.png;
          let paisNuevo: Pais = {
            nombre:nombre,
            bandera:foto
          }
          this.paises.push(paisNuevo);
        }
       this.paises= this.paises.slice(0,6);
      }
    );
  }

  emitirPais(pais:Pais)
 {
   console.log("pais clickeado " + pais)
    this.eventoPaisSeleccionado.emit(pais);
 }

}
