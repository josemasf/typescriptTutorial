interface Datos<T = string>{
    nombre: T
}


let personaLibre: Datos = {nombre: "Juan"};

let personaLibre2: Datos<number> = {nombre: 2};

