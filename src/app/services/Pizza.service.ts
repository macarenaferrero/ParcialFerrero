import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, collection, collectionData, deleteDoc, doc, setDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Pizza } from '../class/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  colPizzas: CollectionReference<DocumentData> = collection(this.firestore, 'pizzas');
  pizzas: Pizza[] = [];
  constructor(private firestore: Firestore) { }

  crearPizza(pizzaDato: Pizza): Promise<void> {
    return new Promise((resolve, reject) => {
      const pizzas = doc(this.colPizzas);
      setDoc(pizzas, {
        id: pizzas.id,
        ...pizzaDato // Spread operator para agregar las propiedades de pizzaDato al objeto
      })
        .then(() => {
          resolve(); // Se resuelve la promesa si la operación se completa correctamente
        })
        .catch((error) => {
          reject(error); // Se rechaza la promesa si ocurre un error durante la operación
        });
    });
  }

  getPizzas(): Observable<any> {
    const observable = collectionData(this.colPizzas);
    return observable;
  }

  deletePizza(id: string): void {
    const pizza = doc(this.colPizzas, id);
    deleteDoc(pizza);
  }

  updatePizza(pizzaModificada: Pizza): Promise<void> {
    return new Promise((resolve, reject) => {
      const pizza = doc(this.colPizzas, pizzaModificada.id);
      updateDoc(pizza, {
        nombre: pizzaModificada.nombre,
        ingredientes: pizzaModificada.ingredientes,
        peso: pizzaModificada.peso,
        precio: pizzaModificada.precio
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
