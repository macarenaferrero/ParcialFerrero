export class Actor {
    nombre?: string;
    apellido?: string;
    nacionalidad?: string;
    direccion?: string;
    email?:string;
    username?:string;

    constructor(nombre: string, apellido:string, nacionalidad: string, direccion: string,
    email: string, username:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacionalidad = nacionalidad;
        this.direccion = direccion;
        this.email = email;
        this.username = username;

    }
}
