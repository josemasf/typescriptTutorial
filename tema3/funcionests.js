function multiplicar(x, y) {
    return x * y;
}
var producto = multiplicar(5, 2);
console.log(producto, "Valor producto");
var sumatoria = 0;
function sumar() {
    sumatoria++;
}
console.log(sumatoria, "Antes de ejecutar");
sumar();
console.log(sumatoria, "Depués de ejecutar");
