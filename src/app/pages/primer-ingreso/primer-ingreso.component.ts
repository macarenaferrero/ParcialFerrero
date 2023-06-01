import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CodeErrorService } from 'src/app/services/code-error.service';

@Component({
  selector: 'app-primer-ingreso',
  templateUrl: './primer-ingreso.component.html',
  styleUrls: ['./primer-ingreso.component.css']
})
export class PrimerIngresoComponent {

FormTerminos:FormGroup;
public aceptTerms:boolean=false;
title = "Terminos & Condiciones";
usuario?:any;
  constructor(private fb:FormBuilder, private toastr: ToastrService, private router: Router,
    private afAuth:AngularFireAuth) {
      this.FormTerminos = this.fb.group({
        aceptTerms:[false,[Validators.requiredTrue]],
        email:["",[Validators.required, Validators.email]]
      })

    }

    ngOnInit(): void {

      this.afAuth.currentUser.then(user=>{
        if(user){
          this.usuario = user;
        }else{
          this.router.navigate(["/bienvenido"]);
        }
      })

    }

    aceptarTerminos(): boolean{
      if(this.validoForm())
      {
        this.usuario.updateProfile({
          photoURL: "aceptado"
        }).then(()=>{
          console.log("Se aceptaron las condiciones correctamente");
          console.log(this.usuario.photoURL);
          this.toastr.success("Se aceptaron las condiciones correctamente", 'Terminos y condiciones',{timeOut: 1000});
          this.router.navigate(['/listadoRepartidores']);
        })
         return true;

      }else{
        this.toastr.warning('Debes aceptar los términos y condiciones.', 'Advertencia');
        return false;
      }
    }

    validoForm(){
      if(this.FormTerminos.valid){
        return true;
      }
      return false;
    }
  }
