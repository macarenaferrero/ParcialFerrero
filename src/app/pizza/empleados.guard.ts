import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosGuard implements CanActivate {
  constructor(private router: Router, private toast: ToastrService, private afAuth:AngularFireAuth){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.afAuth.currentUser != null){
      return true;
    }else{
      this.toast.error("Debe loguearse para acceder a esta sección", "Error");
      this.router.navigate(['/bienvenido']);
      return false;
    }
  }

}
