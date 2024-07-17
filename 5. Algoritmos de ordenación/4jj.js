function jj(arr) {
   
    let posMin;
    let posMax;
    let size = arr.length;
    let posFinal = size-1;
    let aux;
    
    for(let i = 0; i< size/2; i++){
        
    posMin = i;
    posMax = i;

        for(j = i; j <= posFinal; j++){
            if (arr[j] > arr[posMax]) {
                posMax = j;
            }
            if(arr[j] < arr[posMin]) {
                posMin = j;
            }
        }

        aux = arr[posMin];
        arr[posMin] = arr[i];
        arr[i] = aux;

        if(posMax == i){
            posMax = posMin;
        }

        aux = arr[posFinal];
        arr[posFinal] = arr[posMax];
        arr[posMax] = aux;

        posFinal--;

    }

    console.log(arr);
}

jj([45,1,3,2,4,7,1,2,1,44])