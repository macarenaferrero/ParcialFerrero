import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  usuario:any;

  constructor(private afAuth:AngularFireAuth, private router:Router) { }

  ngOnInit(): void {

    this.afAuth.currentUser.then(user=>{
      if(user){
        this.usuario = user;
      }else{
        this.router.navigate([""]);
      }
    })

  }

  logOut(): void {
    this.afAuth.signOut().then(() => this.router.navigate(["/bienvenido"]));
    }

}
