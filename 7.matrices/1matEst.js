// // Inicializar
// let matriz = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
// ];

// console.log(matriz);


function matriz(rows, columns) {
    

let matriz2 = [];
for (let i = 0; i < rows; i++){

    matriz2[i] = []; 

    for(let j = 0; j < columns; j++){
        matriz2[i][j]=(j+1)**(i+1);
    }
}
 console.log(matriz2);
}

matriz(3,9)
