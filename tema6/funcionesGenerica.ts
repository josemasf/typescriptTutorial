function elementoRandom<T>(lista: T[]): T{
    let index: number = Math.floor(Math.random()*lista.length);
    return lista[index];
}

let notas: number[] = [10, 8, 11, 21];
let frutas: string[] = ["PLantano", "Fresa", "Melocotón", "Nectarina"];

console.log(elementoRandom(frutas));
console.log(elementoRandom(notas));