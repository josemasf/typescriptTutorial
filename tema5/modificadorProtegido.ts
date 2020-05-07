class Instrumento{
    protected nombre: string;
    private color: string;

    constructor(nombre_: string){
        this.nombre = nombre_;
        this.color = "negro";
    }
}

class Piano extends Instrumento{
    private deCuerda: boolean = false;

    constructor(nombre: string){
        super(nombre);  
              
    }

    public obtenerNombre():void{
        console.log(this.nombre);
    }

    public obtenerColor():void{
        //No se puede aceeder a el al ser privado
        //console.log(this.color);
    }
}


let miPiano = new Piano("De SAlón");
miPiano.obtenerNombre();
