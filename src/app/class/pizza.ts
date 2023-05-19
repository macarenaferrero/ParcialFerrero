
export class Pizza {
    id?: string;
    nombre?: string;
    ingredientes?: string;
    precio?: number;
    peso?:number;

    constructor(id: string, nombre: string, ingredientes:string, precio: number,
      peso: number){
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
        this.peso = peso;
    }
}
