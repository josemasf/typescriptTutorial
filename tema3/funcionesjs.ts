function multiplicar(num1, num2){
    return num1 * num2;
}


let result = multiplicar(2,4);

console.log(result);

let laCuenta = 100;

function aumentaCuenta(valor){
    laCuenta += valor;
}


aumentaCuenta(20);
console.log(laCuenta);