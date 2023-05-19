import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, collection, collectionData, doc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Repartidor } from '../class/repartidor';


@Injectable({
  providedIn: 'root'
})
export class RepartidorService {
  coleccionActores: CollectionReference<DocumentData> = collection(this.firestore, 'repartidores');


  constructor(private firestore: Firestore) { }

  crearRepartidor(repartidorDato: Repartidor): Promise<void> {
    return new Promise((resolve, reject) => {
      const repartidores = doc(this.coleccionActores);
      setDoc(repartidores, {
        id: repartidores.id,
      ...repartidorDato // Spread operator para agregar las propiedadesrepartidor al objeto
      })
        .then(() => {
          resolve(); // Se resuelve la promesa si la operación se completa correctamente
        })
        .catch((error) => {
          reject(error); // Se rechaza la promesa si ocurre un error durante la operación
        });
    });
  }

  getListadoRepartidores(): Observable<any>{
    const observable = collectionData(this.coleccionActores);
    return observable;
  }


}
