var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Instrumento = (function () {
    function Instrumento(nombre_) {
        this.nombre = nombre_;
        this.color = "negro";
    }
    return Instrumento;
})();
var Piano = (function (_super) {
    __extends(Piano, _super);
    function Piano(nombre) {
        _super.call(this, nombre);
        this.deCuerda = false;
    }
    Piano.prototype.obtenerNombre = function () {
        console.log(this.nombre);
    };
    Piano.prototype.obtenerColor = function () {
        //No se puede aceeder a el al ser privado
        //console.log(this.color);
    };
    return Piano;
})(Instrumento);
var miPiano = new Piano("De SAlón");
miPiano.obtenerNombre();
