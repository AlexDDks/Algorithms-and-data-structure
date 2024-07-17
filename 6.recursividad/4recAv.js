// Torres de Hanoi
function recursiva(discos, partida, destino, aux) {
   
    if (discos>0) {
        recursiva(discos-1, partida, aux, destino);

        console.log(`Discos de la posición: ${partida} a ${destino}`);
        
        recursiva(discos-1, aux, destino, partida)
    
    }
 }

 recursiva(3,1,3,2)