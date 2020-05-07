let casasHarry: string[] = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];


function sombrero(todasCasas: string[]):string{
    let index: number = Math.floor(Math.random()*todasCasas.length);

    return todasCasas[index];
}


let miCasa: string = sombrero(casasHarry);
console.log(`Bienvenido a  ${miCasa}`);


let materias: number[] = [10, 8, 11, 21];

function materiasSemeestr(materias: number[]): number{
    let index: number = Math.floor(Math.random()*materias.length);
    return materias[index];
}


let misMaerias: number = materiasSemeestr(materias);
console.log(`Debes cursar ${misMaerias} materias`);