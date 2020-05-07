var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
abstract;
var SuperClase = (function () {
    function SuperClase() {
        this.abstract = metodoSobreescribir();
    }
    SuperClase.prototype.saludar = function () {
        console.log("Hola");
    };
    return SuperClase;
})();
var claseDerivada = (function (_super) {
    __extends(claseDerivada, _super);
    function claseDerivada() {
        _super.call(this);
    }
    claseDerivada.prototype.metodoSobreescribir = function () {
        console.log("COdigo neuvo");
    };
    return claseDerivada;
})(SuperClase);
var instacia2 = new claseDerivada();
instacia2.metodoSobreescribir();
instacia2.saludar();
