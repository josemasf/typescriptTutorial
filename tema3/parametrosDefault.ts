function asignarPosicion(nombre: string, numero: number, posicion: string = "Portero"): string{
    return `${nombre} jugará con el número ${numero} con la posicion ${posicion}`;
}

console.log(asignarPosicion("Juan", 7, "Ala"));
console.log(asignarPosicion("Lucas", 1));