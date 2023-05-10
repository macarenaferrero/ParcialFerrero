import { Injectable } from '@angular/core';
import { Pelicula } from '../class/pelicula';
import { Firestore, collection, doc, DocumentData, CollectionReference } from '@angular/fire/firestore';
import { setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class BdService {
  listado: any[] = [];
  coleccionPeliculas: CollectionReference<DocumentData> = collection(this.firestore, 'peliculas');

  constructor(private firestore: Firestore) {}

   guardarPelicula(pelicula: Pelicula){

  const documento = doc(this.coleccionPeliculas);
  setDoc(documento,{
    id: documento.id,
  });
}

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
