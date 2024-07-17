function crearMatriz(filas, columnas, valorInicial = null) {
    let matriz = [];
    for (let i = 0; i < filas; i++) {
        let fila = [];
        for (let j = 0; j < columnas; j++) {
            fila[j] = valorInicial;
        }
        matriz.push(fila);
    }
    return matriz;
}

// Ejemplo de uso
let matriz3x3 = crearMatriz(3, 3, 0); 
console.log(matriz3x3);

let matriz2x4 = crearMatriz(2, 4); 
console.log(matriz2x4);

