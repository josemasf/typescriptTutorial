function multiplicar(x: number,y: number): number {
    return x*y;
}

let producto: number = multiplicar(5,2);

console.log(producto, "Valor producto");


let sumatoria: number = 0;
function sumar(): void{
    sumatoria++;
}

console.log(sumatoria, "Antes de ejecutar");
sumar();
console.log(sumatoria, "Depués de ejecutar");