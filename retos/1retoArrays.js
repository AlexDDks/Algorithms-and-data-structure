let array = [2.11, 1.22, 2.00012, 11.1, 2.1, 63.002, 1, 0.1];
let numeroM = array[0];
let numeromen = array[0];

for (let index = 1; index < array.length; index++) {
    if (array[index] > numeroM) {
        numeroM = array[index];
    } else if (array[index] < numeromen) {
        numeromen = array[index];
    }
}

console.log("Número máximo:", numeroM);
console.log("Número mínimo:", numeromen);
