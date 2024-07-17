function recBasica(number) {
    console.log(number);

    //La llamada siempre se hace con una condición
    if (number>0) {

        //El argumento para ejecutar la llamada, siempre tiene que ser diferente
        recBasica(number-1)
    }

    else{
        console.log("Recursion ended");
    }
}

recBasica(5);