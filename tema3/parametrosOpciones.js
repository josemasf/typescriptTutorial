function nombreCompleto(nombre, apellido) {
    return nombre + " " + apellido;
}
var result = nombreCompleto("JoseMa", "Santos");
function nombreCompleto2(nombre, apellido, nombre2) {
    if (nombre2 == undefined)
        return nombre + " " + apellido;
    return nombre + " " + nombre2 + " " + apellido;
}
console.log(nombreCompleto2("Jose", "Santos", "Maria"));
console.log(nombreCompleto2("Jose", "Santos"));
