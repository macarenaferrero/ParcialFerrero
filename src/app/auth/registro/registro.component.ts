import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/class/usuario';
import { CodeErrorService } from 'src/app/services/code-error.service';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  title = "Registro";
  Usuario:Usuario=new Usuario;
  nuevoRegistro:FormGroup;
  isAdmin:boolean=false;

  constructor(private fb:FormBuilder, private toastr: ToastrService, private router: Router,
    private afAuth:AngularFireAuth, private codeError:CodeErrorService) {
    this.nuevoRegistro = fb.group({
    email:["",[Validators.required, Validators.email]],
    pass:["",Validators.required],
    pass2:["",Validators.required],
    isAdmin:[false]
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
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      if(user != null){
      user.updateProfile({
        displayName: this.isAdmin ? "Administrador" : "Empleado"
      }).then(() => {
        console.log(user.displayName);
        return user;
      })
    }else {
      throw new Error("No se pudo obtener el usuario");
    }
    })

    .then(() => {
      this.toastr.success("Usuario creado con exito", 'Usuario exitoso',{timeOut: 1000});
      this.router.navigate(['/terminos&condiciones']);
    }).catch((error) => {
        this.toastr.error(this.codeError.firebaseError(error.code), "Error");
    });
  }

  handleCheckboxChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      console.log("Es admin");
      this.isAdmin = true;
    } else {
      console.log("No es admin");
      this.isAdmin = false;
    }
  }


}
