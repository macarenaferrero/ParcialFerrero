import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, collection, collectionData, deleteDoc, doc, setDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Pelicula } from '../class/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  coleccionPeliculas: CollectionReference<DocumentData> = collection(this.firestore, 'peliculas');
  peliculas: Pelicula[] = [];
  constructor(private firestore: Firestore) { }

  crearPelicula(peliculaDato: Pelicula): Promise<void> {
    return new Promise((resolve, reject) => {
      const peliculas = doc(this.coleccionPeliculas);
      setDoc(peliculas, {
        id: peliculas.id,
        ...peliculaDato // Spread operator para agregar las propiedades de actorDato al objeto
      })
        .then(() => {
          resolve(); // Se resuelve la promesa si la operación se completa correctamente
        })
        .catch((error) => {
          reject(error); // Se rechaza la promesa si ocurre un error durante la operación
        });
    });
  }

  getPeliculas(): Observable<any> {
    const observable = collectionData(this.coleccionPeliculas);
    return observable;
  }

  deletePelicula(id: string): void {
    const pelicula = doc(this.coleccionPeliculas, id);
    deleteDoc(pelicula);
  }

  updatePelicula(peliculaModificada: Pelicula): Promise<void> {
    return new Promise((resolve, reject) => {
      const pelicula = doc(this.coleccionPeliculas, peliculaModificada.id);
      updateDoc(pelicula, {
        nombre: peliculaModificada.nombre,
        tipo: peliculaModificada.tipo,
        fechaEstreno: peliculaModificada.fechaEstreno,
        cantidadPublico: peliculaModificada.cantidadPublico
      })
        .then(() => {
          resolve(); // Se resuelve la promesa si la operación se completa correctamente
        })
        .catch((error) => {
          reject(error); // Se rechaza la promesa si ocurre un error durante la operación
        });
    });
  }

}
