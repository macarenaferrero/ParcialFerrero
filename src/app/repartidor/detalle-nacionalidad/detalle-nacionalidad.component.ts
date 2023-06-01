import { Component, Input } from '@angular/core';
import { Pais } from 'src/app/class/pais';

@Component({
  selector: 'app-detalle-nacionalidad',
  templateUrl: './detalle-nacionalidad.component.html',
  styleUrls: ['./detalle-nacionalidad.component.css']
})
export class DetalleNacionalidadComponent {
@Input() pais?: Pais;

}
