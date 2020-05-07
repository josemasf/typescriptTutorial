class Jugador{
    private posicion: string;

    constructor (posicion_: string){
        this.posicion= posicion_
    }

    obtenerPosicion():void{
        console.log(this.posicion);
    }

    obtenerDatos():void{
        this.obtenerPosicion();
        this.obtenerNumero();
    }

    private obtenerNumero():void{
        console.log("Tiene el 7");
    }
}

let Ronaldo = new Jugador("Delantero");


Ronaldo.obtenerPosicion();
Ronaldo.obtenerDatos();