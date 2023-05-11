import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Pelicula } from '../class/pelicula';
import { CollectionReference, DocumentData, updateDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  coleccionPeliculas: CollectionReference<DocumentData> = collection(this.firestore, 'peliculas');

  constructor(private firestore: Firestore) { }

  getPeliculas(): Observable<any> {
    const observable = collectionData(this.coleccionPeliculas);
    return observable;
  }

  public deletePelicula(id: string): void {
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
