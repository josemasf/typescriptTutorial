class Persona{
    nombre: string;

    public constructor(nombre_:string){
        this.nombre= nombre_;
    }

    public hablar(mensaje: string){
        console.log(mensaje);
    }
}


let instacia = new Persona("Juan");
instacia.hablar("Hola");