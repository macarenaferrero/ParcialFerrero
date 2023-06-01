import { Component, Input } from '@angular/core';
import { Repartidor } from 'src/app/class/repartidor';

@Component({
  selector: 'app-detalle-repartidor',
  templateUrl: './detalle-repartidor.component.html',
  styleUrls: ['./detalle-repartidor.component.css']
})
export class DetalleRepartidorComponent {
@Input() repartidorSeleccionado?: Repartidor;
}
