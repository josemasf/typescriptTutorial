var Persona = (function () {
    function Persona(nombre_) {
        this.nombre = nombre_;
    }
    Persona.prototype.hablar = function (mensaje) {
        console.log(mensaje);
    };
    return Persona;
})();
var instacia = new Persona("Juan");
instacia.hablar("Hola");
