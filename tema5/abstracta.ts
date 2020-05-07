abstract class SuperClase {

    abstract metodoSobreescribir():void;
    saludar(): void{
        console.log("Hola");
    }
}


class claseDerivada extends SuperClase{
    constructor(){
        super();
    }

    metodoSobreescribir():void{
        console.log("COdigo neuvo");
    }
}

let instacia2 = new claseDerivada();

instacia2.metodoSobreescribir();
instacia2.saludar();