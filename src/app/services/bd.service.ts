import { Injectable } from '@angular/core';
import { collectionData, doc } from '@angular/fire/firestore';
import { CollectionReference, DocumentData, Firestore, addDoc, collection, getDocs, updateDoc } from 'firebase/firestore';
import { Pelicula } from '../class/pelicula';

@Injectable({
  providedIn: 'root'
})
export class BdService {
  listado: any[] = [];
  //coleccionPeliculas: CollectionReference<DocumentData> = collection(this.firestore, 'peliculas');

  constructor(private firestore: Firestore) {
    
   }

  //  guardar(){
  //   const documentoNuevo = doc(this.coleccionPeliculas)
  //   const nuevoId = documentoNuevo.id;

  //   addDoc(coleccion, {nombre:'Esperando la carroza', tipo:'Comedia', fechaEstreno: '12/11/1992', cantidadPublico: 1200, fotoPelicula:'/ejemplo'})
  //  }

  //  traer(){
  //   const coleccion = collection(this.firestore, 'peliculas');
  //   const respuesta = collectionData(coleccion);

  //   Se ejecuta siempre que hay un cambio hasta que te desuscribas:
  //   subscription.unsubscribe();
  //   const subscription = respuesta.subscribe((informacion)=>{
  //   this.listado = informacion;
  //   })

    
  //   getDocs(coleccion).then((respuesta)=>{
  //     console.log(respuesta);
  //   });
  // }


  // modificar(pelicula:Pelicula){
  //   const coleccion = collection(this.firestore, 'peliculas');
  //   const documento = doc(coleccion, pelicula.id);
  //   updateDoc(documento, {...pelicula});
  // }
}
