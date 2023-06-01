import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PrimerIngresoComponent } from '../pages/primer-ingreso/primer-ingreso.component';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AceptTermsGuard implements CanDeactivate<unknown> {

constructor(private toastr: ToastrService, private router: Router){}

  canDeactivate(
    component: PrimerIngresoComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(component.aceptarTerminos()){
      this.router.navigate(['/listadoRepartidores']);
      console.log("Se aceptaron las condiciones correctamente");
      return true;
    } else {
      console.log("No se aceptaron las condiciones correctamente");
      return false;
    }
  }

}
