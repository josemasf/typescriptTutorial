var Jugador = (function () {
    function Jugador(posicion_) {
        this.posicion = posicion_;
    }
    Jugador.prototype.obtenerPosicion = function () {
        console.log(this.posicion);
    };
    Jugador.prototype.obtenerDatos = function () {
        this.obtenerPosicion();
        this.obtenerNumero();
    };
    Jugador.prototype.obtenerNumero = function () {
        console.log("Tiene el 7");
    };
    return Jugador;
})();
var Ronaldo = new Jugador("Delantero");
Ronaldo.obtenerPosicion();
Ronaldo.obtenerDatos();
