function asignarPosicion(nombre, numero, posicion) {
    if (posicion === void 0) { posicion = "Portero"; }
    return nombre + " jugar\u00E1 con el n\u00FAmero " + numero + " con la posicion " + posicion;
}
console.log(asignarPosicion("Juan", 7, "Ala"));
console.log(asignarPosicion("Lucas", 1));
