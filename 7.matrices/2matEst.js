// MATRICES CON POTENCIAS
// function multMat(row1, col1, row2, col2) {


//     let matriz = [];
//     for (let i = 0; i < row1; i++){
//     matriz[i] = []; 

//     for(let j = 0; j < col1; j++){
//         matriz[i][j]=(j+1)**(i+1);
//     }
//     }



//     let matriz2 = [];
//     for (let i = 0; i < row2; i++){
//     matriz2[i] = []; 

//     for(let j = 0; j < col2; j++){
//         matriz2[i][j]=(j+1)**(i+1);
//     }
//     }
//  console.log(matriz,matriz2);
// }

// multMat(3,3,3,3)

// MULTIPLICACIÓN DE MATRICES
let matriz =[
    [3, 1, -2],
    [0, 4, 2],
    [7, 5, 1]
]

let matriz2 =[
    [-1, 0, 8],
    [3, 6, 9],
    [0, 0, 3]
]

let res = [];

for(let i = 0; i < 3 ; i++){

    res[i]=[];
   
    for(let j = 0; j < 3 ; j++){
    
        let aux = 0;
        for(let k = 0 ; k < 3; k++){
            aux+= matriz[i][k] * matriz2[k][j];
        }
        res[i][j] = aux;
    }   
}

console.log(res);