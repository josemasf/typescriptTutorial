function deporte(persona) {
    var deportes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        deportes[_i - 1] = arguments[_i];
    }
    return "A " + persona + " le gusto lo siguiente: " + deportes.join(",");
}
console.log(deporte("Miguel", "Futbol", "Futsal", "Baloncesot"));
