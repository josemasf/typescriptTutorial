class Unificador<T>{
    valor: T;
    sumar:(valor1: T, valor2: T) => T;
}


let miUnificador = new Unificador<number>();

miUnificador.valor = 20;
miUnificador.sumar = function(valor1_, valor2_){
    return valor1_+ valor2_;
}

console.log(miUnificador.sumar(2,3));

//---------//

let miUnificador2 = new Unificador<string>();

miUnificador2.valor = "20";
miUnificador2.sumar = function(valor1_, valor2_){
    return valor1_+ valor2_;
}

console.log(miUnificador2.sumar("2","3"));