let permiso: boolean= true;

class Trabajador{
    nombre: string;

    get nombreCompleto(): string{
        return this.nombre;
    }
    set colocarNombre(nombre_: string){
        if(permiso){
            this.nombre = nombre_;
            permiso = false;
        }
        else
        {
            console.log("Sin permiso");
        }

    }
}


let empleado = new Trabajador();
empleado.colocarNombre ="Pedro";
console.log(empleado.nombreCompleto);
empleado.colocarNombre ="Juan";
console.log(empleado.nombreCompleto);