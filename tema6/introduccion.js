var casasHarry = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
function sombrero(todasCasas) {
    var index = Math.floor(Math.random() * todasCasas.length);
    return todasCasas[index];
}
var miCasa = sombrero(casasHarry);
console.log("Bienvenido a  " + miCasa);
var materias = [10, 8, 11, 21];
function materiasSemeestr(materias) {
    var index = Math.floor(Math.random() * materias.length);
    return materias[index];
}
var misMaerias = materiasSemeestr(materias);
console.log("Debes cursar " + misMaerias + " materias");
