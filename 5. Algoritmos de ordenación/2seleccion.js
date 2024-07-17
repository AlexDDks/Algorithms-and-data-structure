let array = [1,3,2,4,7,1];

let aux;
let posMin;
function seleccion(arr) {

    for (let i = 0 ; i < arr.length ; i++){
        posMin = i;

        for(let j = (i+1) ; j < (arr.length) ; j++){

            if (arr[posMin] > arr[j]) {
                posMin = j;
            }         
        }
        aux = arr[posMin];
        arr[posMin] = arr[i];
        arr[i] = aux;

    }

}
console.time('insercion'); // Inicia el cronómetro
seleccion(array);
    console.timeEnd('insercion');
