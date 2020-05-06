function deporte(persona: string, ...deportes: string[]): string{
    
    return `A ${persona} le gusto lo siguiente: ${deportes.join(",")}`
}

console.log(deporte("Miguel", "Futbol", "Futsal", "Baloncesot"));