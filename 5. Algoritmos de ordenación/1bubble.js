let arr = [1,3,2,4,7,1];
let long = arr.length;
let aux
let round = 0;
let ord = false;

function bubble(arr) {
    while (!ord) {
         
    ord=true;
    for (let i = 0; i < ((long-1)-round); i++) {
        if (arr[i] > arr[i+1]) {
           aux =  arr[i+1];
           arr[i+1] = arr[i];
           arr[i] = aux;

           ord = false;
        }
    }
        round++;
}
}
console.time('insercion'); 
bubble(arr);
console.timeEnd('insercion');

