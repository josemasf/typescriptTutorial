function adoptar(mascota) {
    console.log("Yo adopte a " + mascota.nombre);
}
var miMascote = { nombre: "Lucas", raza: "Pitbull" };
adoptar(miMascote);
//Tiene que ser exactamente igual a la interfaz
var miMascote2 = { nombre: "Lucas" };
adoptar(miMascote);
