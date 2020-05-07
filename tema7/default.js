var Periodista = (function () {
    function Periodista() {
    }
    Periodista.prototype.preguntar = function (mensaje) {
        console.log(mensaje);
    };
    return Periodista;
})();
var periodista = new Periodista();
periodista.nombre = "Luis";
periodista.apellido = "Del Olmo";
exports["default"] = periodista;
