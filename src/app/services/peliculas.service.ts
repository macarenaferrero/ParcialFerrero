import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Pelicula } from '../class/pelicula';
import { updateDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private firestore: Firestore) { }

  getPeliculas(): Observable<any> {
    const coleccion = collection(this.firestore, 'peliculas');
    const observable = collectionData(coleccion);
    return observable;
  }

  public deletePelicula(id: string): void {
    const coleccion = collection(this.firestore, 'peliculas');
    const pelicula = doc(coleccion, id);
    deleteDoc(pelicula);
  }

  updatePelicula(peliculaModificada: Pelicula): Promise<void> {
    return new Promise((resolve, reject) => {
      const coleccion = collection(this.firestore, 'peliculas');
      const pelicula = doc(coleccion, peliculaModificada.id);
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
