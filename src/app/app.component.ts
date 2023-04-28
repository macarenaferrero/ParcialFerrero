import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { BdService } from './services/bd.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ParcialFerrero';
  suscripcion! : Subscription;
}

