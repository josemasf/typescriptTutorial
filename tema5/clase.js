var Vehiculo = (function () {
    function Vehiculo(marca_, fecha_, color_, puertas_) {
        this.kilometros = 0;
        this.marca = marca_;
        this.fecha = fecha_;
        this.color = color_;
        this.puertas = puertas_;
    }
    Vehiculo.prototype.avanzar = function () {
        this.kilometros += 5;
        console.log("Avanzo 5 km");
    };
    return Vehiculo;
})();
var miVehiculo = new Vehiculo("Seat", "2020", "Rojo", 3);
console.log(miVehiculo);
miVehiculo.avanzar();
console.log(miVehiculo);
var miMoto = new Vehiculo("Derby", "1980", "Azul", 0);
console.log(miMoto);
var miDeportivo = new Vehiculo("Ferray", "1975", "Azul", 3);
miDeportivo.avanzar();
miDeportivo.avanzar();
console.log(miDeportivo);
