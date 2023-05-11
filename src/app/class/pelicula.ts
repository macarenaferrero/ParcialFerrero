import { EnumGeneroPeliculas } from "../utils/enum-genero-peliculas";

export class Pelicula {
    id?: string;
    nombre?: string;
    tipo?: EnumGeneroPeliculas;
    fechaEstreno?: string;
    cantidadPublico?: number;
    fotoPelicula?:string;

    constructor(id: string, nombre: string, tipo:EnumGeneroPeliculas, fechaEstreno: string, cantidadPublico: number,
    fotoPelicula: string){
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaEstreno = fechaEstreno;
        this.cantidadPublico = cantidadPublico;
        this.fotoPelicula = fotoPelicula;

    }
}
