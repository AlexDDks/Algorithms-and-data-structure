

function recursiva(number) {
    if (number > 1) {
        let aux;
        aux =recursiva(number-1);
        number = number * aux
        
    }   
    console.log(number);
    return number
}
