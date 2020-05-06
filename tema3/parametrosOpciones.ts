function nombreCompleto (nombre: string, apellido: string): string{
    return nombre + " " + apellido;
}


let result: string = nombreCompleto("JoseMa", "Santos");


function nombreCompleto2 (nombre: string, apellido: string,  nombre2?: string): string{
    
    if(nombre2==undefined)
    return nombre + " " + apellido;
    
    return nombre + " " + nombre2 + " " + apellido;
}

console.log(nombreCompleto2("Jose", "Santos", "Maria"))

console.log(nombreCompleto2("Jose", "Santos"))
