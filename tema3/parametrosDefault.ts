function asignarPosicion(nombre: string, numero: number, posicion: string = "Portero"): string{
    return `${nombre} jugará con el número ${numero} con la posicion ${posicion}`;
}
///En TS los paramtros son obligatorios
console.log(asignarPosicion("Juan", 7, "Ala"));


///La posición al tener valor defecto, no es necesaario
console.log(asignarPosicion("Lucas", 1));