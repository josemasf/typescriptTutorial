function elementoRandom(lista) {
    var index = Math.floor(Math.random() * lista.length);
    return lista[index];
}
var notas = [10, 8, 11, 21];
var frutas = ["PLantano", "Fresa", "Melocotón", "Nectarina"];
console.log(elementoRandom(frutas));
console.log(elementoRandom(notas));
