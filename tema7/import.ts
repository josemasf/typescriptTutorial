import {PI} from "./exportar";
import {simple} from "./exportar";

import * as paquete from "./exportar";

console.log(PI);
console.log(paquete.PI);

import {saludar, Deportista, Futbolista} from "./exportar";

saludar();

let deport = new Deportista();
deport.nombre = "PAU";

let futbol:Futbolista = {tieneBalon: true};



simple();

import periodista from "./default";

console.log(periodista);
periodista.preguntar("TIenes pelo en la lengua?");