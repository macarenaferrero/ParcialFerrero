import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { BdService } from './services/bd.service';
import { HttpClient } from '@angular/common/http';
import { PaisesService } from './services/paises.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ParcialFerrero';
  suscripcion! : Subscription;

// constructor(private servicePaises: PaisesService){}
constructor(){}
ngOnInit(){
 // this.traer();
}

gnOnDestroy(){
 // this.suscripcion.unsubscribe();
}

traer(){
//this.suscripcion = this.servicePaises.traerPaises();
}
}

