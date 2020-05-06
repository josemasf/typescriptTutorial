interface Perro{
    nombre: string;
}

function adoptar(mascota: Perro): void{
    console.log(`Yo adopte a ${mascota.nombre}`);
}


let miMascote = {nombre: "Lucas", raza: "Pitbull"};

adoptar(miMascote);

//Tiene que ser exactamente igual a la interfaz
let miMascote2: Perro = {nombre: "Lucas"};

adoptar(miMascote);