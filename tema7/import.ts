import {PI} from "./exportar";
console.log(PI);

import {saludar, Deportista, Futbolista} from "./exportar";

saludar();

let deport = new Deportista();
deport.nombre = "PAU";

let futbol:Futbolista = {tieneBalon: true};

import {simple} from "./exportar";

simple();