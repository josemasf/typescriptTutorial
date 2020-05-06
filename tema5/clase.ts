class Vehiculo{
    marca: string;
    fecha: string;
    color: string;
    puertas: number;
    kilometros: number = 0;

    constructor(marca_: string, fecha_: string, color_:string,puertas_:number){
        this.marca= marca_;
        this.fecha= fecha_;
        this.color= color_;
        this.puertas = puertas_;        
    }

    avanzar(){
        this.kilometros += 5;
        console.log("Avanzo 5 km");
    }
}


let miVehiculo = new Vehiculo("Seat","2020", "Rojo",3);
console.log(miVehiculo);
miVehiculo.avanzar();
console.log(miVehiculo);

let miMoto = new Vehiculo("Derby","1980", "Azul",0);
console.log(miMoto);

let miDeportivo = new Vehiculo("Ferray","1975", "Azul",3);
miDeportivo.avanzar();
miDeportivo.avanzar();
console.log(miDeportivo);
