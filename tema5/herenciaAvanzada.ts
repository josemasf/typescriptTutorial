class Animal{
    nombre: string;
    
    constructor(nombre_: string){
        this.nombre= nombre_;
    }

    caminar(distancia: number=0): void{
        console.log(`${this.nombre} camnió ${distancia}`) ;
    }
}

class Serpiente extends Animal{
    longitud: number;

    constructor(nombre_: string, longitud_: number){
        super(nombre_);

        this.longitud= longitud_;
    }

    caminar(distancia: number = 5){
        console.log("Deslizando....");
        super.caminar(distancia);
    }
}

class Caballo extends Animal{
    constructor (nombre: string){
        super(nombre);
    }
    caminar(distancia: number = 5){
        console.log("Trotar....");
        super.caminar(distancia);
    }
    galopar(){
        console.log("Galopando....");
    }
}


let san = new Serpiente("San", 10);
let xeus = new Caballo("Xeus");

san.caminar();
xeus.caminar();
xeus.galopar();