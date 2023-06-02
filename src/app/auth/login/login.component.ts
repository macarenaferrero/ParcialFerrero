import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/class/usuario';
import { CodeErrorService } from 'src/app/services/code-error.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = "Login";
  Usuario:Usuario=new Usuario;
    loginUsuario:FormGroup;
    constructor(private fb:FormBuilder, private toastr: ToastrService, private router: Router,
      private afAuth:AngularFireAuth, private codeError:CodeErrorService) {
        this.loginUsuario = this.fb.group({
          email: ['',[Validators.required, Validators.email]],
          pass: ['',Validators.required],
        });

    }

    ngOnInit(): void {

    }
    completar(){
      this.Usuario.email = "macarenaferrero@gmail.com"
      this.Usuario.pass = "123456";
    }

    login(){
      const email = this.loginUsuario.value.email;
      const pass = this.loginUsuario.value.pass;
      this.afAuth.signInWithEmailAndPassword(email, pass)
      .then((user:any) => {
        console.log("Desde login: " + user.user.photoURL);
        if(user.user.photoURL == "aceptado"){
          this.toastr.success("Ingreso satisfactorio","Sesión iniciada",{timeOut: 1000})
          this.router.navigate(['/repartidor/listadoRepartidores']);
        }else{
          this.toastr.warning("Debe aceptar los términos y condiciones","Advertencia");
          this.router.navigate(['/terminos&condiciones']);
        }
      }).catch((error:any) => {
        this.toastr.error(this.codeError.firebaseError(error.code), "Error");
      })
    }
}
