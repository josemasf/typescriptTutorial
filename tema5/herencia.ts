class Mascota{
    caminar(distancia: number):void{
        console.log(`Se mueve ${distancia} metros`);

    }
}

class Gato extends Mascota{
    maullar():void{
        console.log("Miauuuuuu");
    }
}

let gatito = new Gato();

gatito.caminar(5);
gatito.maullar();