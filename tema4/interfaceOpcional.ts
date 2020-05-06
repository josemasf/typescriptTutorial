interface Casa{
    ancho: number;
    largo: number;
    alto?: number;
}

function dimensiones(medidas:Casa): string{
    let area: number = medidas.ancho*medidas.largo;

    if(medidas.alto){
        return `El área de tu casa es ${area} con una altura de ${medidas.alto}`        
    }
    else{
        return "Tu casa no tiene alto"
    }
}


console.log(dimensiones({ancho: 10, largo: 20, alto: 30}), "Opción 1");
console.log(dimensiones({ancho: 10, largo: 20}), "Opción 2");