import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/class/usuario';
import { CodeErrorService } from 'src/app/services/code-error.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  title = "Registro";
  Usuario:Usuario=new Usuario;
  nuevoRegistro:FormGroup;

  constructor(private fb:FormBuilder, private toastr: ToastrService, private router: Router,
    private afAuth:AngularFireAuth, private codeError:CodeErrorService) {
    this.nuevoRegistro = fb.group({
    email:["",[Validators.required, Validators.email]],
    pass:["",Validators.required],
    pass2:["",Validators.required],
    })
  }
  ngOnInit(): void {
  }

  registrar(){

    if(this.Usuario.pass != this.Usuario.pass2){
      this.toastr.error("Las contraseñas ingresadas deben ser iguales", "Error");
      return;
    }

    this.afAuth
    .createUserWithEmailAndPassword(this.Usuario.email, this.Usuario.pass)
    .then(() => {
      this.toastr.success("Usuario creado con exito", 'Usuario exitoso');
      this.router.navigate(['/listadoRepartidores']);
    }).catch((error) => {
        this.toastr.error(this.codeError.firebaseError(error.code), "Error");
    });
  }


}
