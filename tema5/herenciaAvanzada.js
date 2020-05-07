var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(nombre_) {
        this.nombre = nombre_;
    }
    Animal.prototype.caminar = function (distancia) {
        if (distancia === void 0) { distancia = 0; }
        console.log(this.nombre + " camni\u00F3 " + distancia);
    };
    return Animal;
})();
var Serpiente = (function (_super) {
    __extends(Serpiente, _super);
    function Serpiente(nombre_, longitud_) {
        _super.call(this, nombre_);
        this.longitud = longitud_;
    }
    Serpiente.prototype.caminar = function (distancia) {
        if (distancia === void 0) { distancia = 5; }
        console.log("Deslizando....");
        _super.prototype.caminar.call(this, distancia);
    };
    return Serpiente;
})(Animal);
var Caballo = (function (_super) {
    __extends(Caballo, _super);
    function Caballo(nombre) {
        _super.call(this, nombre);
    }
    Caballo.prototype.caminar = function (distancia) {
        if (distancia === void 0) { distancia = 5; }
        console.log("Trotar....");
        _super.prototype.caminar.call(this, distancia);
    };
    Caballo.prototype.galopar = function () {
        console.log("Galopando....");
    };
    return Caballo;
})(Animal);
var san = new Serpiente("San", 10);
var xeus = new Caballo("Xeus");
san.caminar();
xeus.caminar();
xeus.galopar();
