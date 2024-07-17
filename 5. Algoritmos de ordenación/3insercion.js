function insercion(array) {
    let aux;
    
    for (let i = 1; i < array.length; i++) {
        aux = array[i];
    
        let j;
        for (j = i-1; j >= 0 && array[j]> aux; j--) { 
            array[j+1] = array[j]; 
        }
        array[j+1] = aux 

    }
    }
    
console.time('insercion'); // Inicia el cronómetro
    insercion([1,3,2,4,7,1]);
    console.timeEnd('insercion'); // Termina el cronómetro y muestra el tiempo transcurrido
