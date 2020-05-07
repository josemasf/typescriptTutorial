var Unificador = (function () {
    function Unificador() {
    }
    return Unificador;
})();
var miUnificador = new Unificador();
miUnificador.valor = 20;
miUnificador.sumar = function (valor1_, valor2_) {
    return valor1_ + valor2_;
};
console.log(miUnificador.sumar(2, 3));
//---------//
var miUnificador2 = new Unificador();
miUnificador2.valor = "20";
miUnificador2.sumar = function (valor1_, valor2_) {
    return valor1_ + valor2_;
};
console.log(miUnificador2.sumar("2", "3"));
