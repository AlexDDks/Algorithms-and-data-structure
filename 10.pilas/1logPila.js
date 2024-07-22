// Las pilas tienen la filosofía LIFO: El primero en entrar es el primero que se va, Last In, First Out. Por ejemplo en una cocina cuando lavamos, ponemos una pila de platos a lavar, el primero que se lava es el último que se puso. Es literalmente como utilizar una pila de cosas.

// Creating the class for each Node of the Stack
class NodeStack {
    constructor(name){
        this.name = name;
        this.next = null;
    }
}

// Creatin the class with all properties and methods for our purpose
class StackList{
    constructor(){
        // Must have a head and a tail in order or knowing which one is the first and last Node
        this.head = null;
        this.tail = null;
    }
    
    showStack(){
        let current = this.head;
        let index = 1;
        console.log("Stack List:");

         // While there is minimun one Node
         if (current !== null) {
            while (current !== null) {
                // The content of the object/Node is shown in the console
                console.log(`Stack ${index}: ${current.name}`);
                // If there are not other Nodes, current == null, so the loop is gonna finish
                current = current.next;
                index++;
            }
        }
        else{
            console.log("There aren't Stack elements");
        }
    }

    //Method fot creating a new instance of the class NodeStack and position it where must be
    append(element){
        // Creating a new instance
        let newStack = new NodeStack(element);
        
        // If there are not any node, this one is the head and the tail (first and last Node at the time)
        if (this.head === null) {
        this.head = newStack;
        this.tail = newStack;
        }

        // If there are at least one Node, the new Node is positioned in the
        else{
            this.tail.next = newStack;
            this.tail = newStack;
        }
    }

    deleteStack(){
        // There should be at least one node, if not, the loop ends and the method as well
        if (this.head === null) {
           console.log("The stack is empty");
           return;
        }

        // If there are just one Node, we delete the head which as well is the tail
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            console.log("The Node was deleted and the stack is already empty");
            return;
        }

        // If there are at least one Node
        else{
            // Initializing the current variable to the head of the stack
            let current = this.head
                // With this logic we are positioned in the Node inmediatly before of the last one
                while (current.next.next !== null) {
                    current = current.next
                }
                // Saving the deleted node for future usages
                let deletedStack = this.tail;
                // The last Node is now the Node inmediatly before of the last one
                this.tail = current;
                // Its next is gonna be deleted because this one y the last
                current.next = null;
                console.log(`The stack ${deletedStack.name} were deleted, ${this.tail.name} is now the last element`);
        }
    }

    deleteCustomStack(quantity) {
        // There should be at least one node, if not, the loop ends and the method as well
        if (this.head === null) {
            console.log("The stack is empty");
            return;
        }
        
        // This is the logic to obtain the number of Nodes in the Stack
        let contador = 1; // At least there is a Node
        let current = this.head;
        // While there are more than one Node, the loop is gonna be on
        while (current.next !== null) {
            current = current.next;
            contador++;
        }
        
        // Comparison of quantities that the user inserts vs the number of stacks
        if (quantity > contador) {
            console.log(`The value is out of boundaries, we have: ${contador} elements in the stack`);
            return;
        } else if (quantity === contador) {
            // If the quantity is equal to the number of elements, we clear the stack
            this.head = null;
            this.tail = null;
            console.log("All nodes were deleted, the stack is now empty");
            return;
        } else {
            // If there are more than one node and quantity is less than total nodes
            for (let i = 1; i <= quantity; i++) {
                // Initialize the current variable to the head of the stack
                current = this.head;
                
                // Positioned in the previous Node, of the one that we want to delete
                while (current.next.next !== null) {
                    current = current.next;
                }
                
                // Deleting the last element of the current iteration
                let deletedStack = this.tail;
                this.tail = current;
                current.next = null;
                console.log(`The stack ${deletedStack.name} was deleted, ${this.tail.name} is now the last element`);
            }
            
            // After the deletions, check if only one node is left
            if (this.head === this.tail) {
                console.log("Only one node left in the stack");
            }
        }
    }
    
    

}



const prompt = require("prompt-sync")({ sigint: true });
function callMenuStack(stackList) {
    let option;
    do {
        // showing in console options
        console.log("\nManager of queu:");
        console.log("1 - Show Stack.");
        console.log("2 - Add  costumer Stack.");
        console.log("3 - Delete element.");
        console.log("4 - Delete custom element.");

        console.log("5 - Exit.");

        // The function prompt shows a message and waits for a response which is saved originally as a string that is coverted in an int of base 10, because the response
        option = parseInt(prompt("Choose an option: "), 10);
    } 
    // while the response of the user is into the allowed parameters
    while (option < 1 || option > 5);
    switch (option) {
        case 1:
            // This case just show the list of Nodes if they exists
            stackList.showStack();
            break;

        case 2:
            addElementStack(stackList);
            break;
        
        case 3:
            deleteElementStack();
            break;
    
        case 4:
        deleteCustomStack(stackList);
        break;

        case 5:
            console.log("Exiting...");
            return;
        }
   
    // After executing every case, the method is called again
    callMenuStack(stackList);
}
function addElementStack(stackList){
    let elements = parseInt(prompt("Type the number of Stacks you want to add: "), 10);
    for(let i = 1; i <= elements ; i++){
        stackList.append(i)
    }
    console.log(`${elements} element were created`);
}

function deleteElementStack() {
    stackList.deleteStack();
}

function deleteCustomStack (stackList){
    let quantity = parseInt(prompt("Type the number of Stacks you want to delete: "), 10);
    stackList.deleteCustomStack(quantity);
}

let stackList = new StackList();
callMenuStack(stackList);

