import { EnumGeneroPeliculas } from "../utils/enum-genero-peliculas";
import { Actor } from "./actor";

export class Pelicula {
    id?: string;
    nombre?: string;
    tipo?: EnumGeneroPeliculas;
    fechaEstreno?: string;
    cantidadPublico?: number;
    fotoPelicula?:string;
    actor?:Actor;

    constructor(id: string, nombre: string, tipo:EnumGeneroPeliculas, fechaEstreno: string, cantidadPublico: number,
    fotoPelicula: string, actor:Actor){
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaEstreno = fechaEstreno;
        this.cantidadPublico = cantidadPublico;
        this.fotoPelicula = fotoPelicula;
        this.actor = actor;
    }
}
