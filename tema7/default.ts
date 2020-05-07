interface informacion{
    nombre: string;
    apellido: string;
}


class Periodista implements informacion{
    nombre: string;
    apellido: string;

    preguntar(mensaje: string): void{
        console.log(mensaje);
    }
}

let periodista = new Periodista();

periodista.nombre = "Luis";
periodista.apellido="Del Olmo";


export default periodista;