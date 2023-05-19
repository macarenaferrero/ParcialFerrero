export class Repartidor {
    nombre?: string;
    DNI?: string;
    nacionalidad?: string;
    unidadPropia?: string;
    capacidadTransporte?:string;
    edad?:string;

    constructor(nombre: string, DNI:string, nacionalidad: string, unidadPropia: string,
      capacidadTransporte: string, edad:string){
        this.nombre = nombre;
        this.DNI = DNI;
        this.nacionalidad = nacionalidad;
        this.unidadPropia = unidadPropia;
        this.capacidadTransporte = capacidadTransporte;
        this.edad = edad;

    }
}
