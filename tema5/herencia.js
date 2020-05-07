var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.caminar = function (distancia) {
        console.log("Se mueve " + distancia + " metros");
    };
    return Animal;
})();
var Gato = (function (_super) {
    __extends(Gato, _super);
    function Gato() {
        _super.apply(this, arguments);
    }
    Gato.prototype.maullar = function () {
        console.log("Miauuuuuu");
    };
    return Gato;
})(Animal);
var gatito = new Gato();
gatito.caminar(5);
gatito.maullar();
