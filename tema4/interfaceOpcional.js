function dimensiones(medidas) {
    var area = medidas.ancho * medidas.largo;
    if (medidas.alto) {
        return "El \u00E1rea de tu casa es " + area + " con una altura de " + medidas.alto;
    }
    else {
        return "Tu casa no tiene alto";
    }
}
console.log(dimensiones({ ancho: 10, largo: 20, alto: 30 }), "Opción 1");
console.log(dimensiones({ ancho: 10, largo: 20 }), "Opción 2");
