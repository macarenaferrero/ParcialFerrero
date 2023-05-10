import { Injectable } from '@angular/core';
import { Actor } from '../class/actor';
import { Observable } from 'rxjs';
import { CollectionReference, DocumentData, Firestore, collection, collectionData, doc, getDocs, setDoc } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ActoresService {
  coleccionActores: CollectionReference<DocumentData> = collection(this.firestore, 'actores');


  constructor(private firestore: Firestore) { }

  crearActor(actorDato: Actor): Promise<void> {
    return new Promise((resolve, reject) => {
      const actores = doc(this.coleccionActores);
      setDoc(actores, {
        id: actores.id,
        ...actorDato // Spread operator para agregar las propiedades de actorDato al objeto
      })
        .then(() => {
          console.log(' Actor creado correctamente');
          resolve(); // Se resuelve la promesa si la operación se completa correctamente
        })
        .catch((error) => {
          console.error('Error al crear el objeto Actor', error);
          reject(error); // Se rechaza la promesa si ocurre un error durante la operación
        });
    });
  }

  getListadoActores(): Observable<any>{
    const coleccion = collection(this.firestore, 'actores');
    const observable = collectionData(coleccion);
    return observable;
  }


}