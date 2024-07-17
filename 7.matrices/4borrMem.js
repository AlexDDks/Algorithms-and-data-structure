// Hay que liberar memoria de la RAM ya que mucha de esta información ya no se necesita

// En JavaScript, no necesitas gestionar la memoria manualmente como en C++ con delete[]. JavaScript tiene un recolector de basura (garbage collector) que automáticamente gestiona la memoria, liberando espacio cuando los objetos ya no son accesibles.

// Liberación de Memoria en JavaScript
// Aunque no puedes liberar memoria manualmente, puedes asegurarte de que los objetos ya no sean referenciados para que el recolector de basura los elimine.

// Ejemplo: Liberar una Matriz
// Supongamos que tienes una matriz y quieres "liberar" su memoria. Simplemente puedes eliminar las referencias a la matriz:

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Usar la matriz
console.log(matriz);

// Liberar la referencia a la matriz
matriz = null;
