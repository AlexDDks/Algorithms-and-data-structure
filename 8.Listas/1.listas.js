// Una lista es un conjunto de elementos enlazados 

// Es una agrupación de datos similar a objetos que está enlazado al siguiente dato y siguiente dato, etc.

// Siempre debe haber un puntero que es la raiz de la lista que apunta al primer elemento. Cada elemento tendrá un puntero que enlazará al siguiente. El último elemento tendrá un puntero a nada

// Pueden haber listas abiertas o cerradas (cuando terminan terminan o cuando terminan regresan al primer elemento)

// Pueden haber listas doble, es decir que pueden estar enlazados en ambas vías, de ida y vuelta

function shop(option) {
    
do {
    console.log("Manager of Shopping List:");
    console.log("1. Showing Shopping List");
    console.log("2. Add article");
    console.log("3. Remove article");
    console.log("4. Create default shopping list");
    console.log("5. Exit");
    console.log("Type the option");

} while (option < 1 || option > 5){
    switch (option) {
        case 1:
            console.log("Show list");
            break;

        case 2:
            console.log("Add article");
            break;
    
        case 3:
            console.log("Remove article");
            break;
        
        case 4:
            console.log("Create default shopping list");
            break;
                
        case 5:
            console.log("Create default shopping list");
            break;
        
    
        default:
            break;
    }
}
}