// Las colas se siguen por la filosofía: FIFO (First In, First Out), es decir; el primer elemento que se ingresó será el primero que se eliminará en su momento. Por ejemplo al recibir solicitudes, comúnmente la primera solicitud que llega es la primera que se va. O en la cola de un banco, los turnos, el primero que llega es el primero que se va.

// La representación gráfica es similar a una lista, sin embargo  cada que llega uno nuevo se tienen que agregar al final de la cola. De manera teórica, no se elimina algún elemento intermedio, sino que la base de esto es que primero en la cola es el que va a ir eliminándose.

// Como en las listas, se tiene un elemento puntero, el cual al borrarse el elemento de la cola, el puntero padre apuntará ahora a donde apuntaba el elemento padre.

// -------------------------------------

// Definig a class Queue with the properties that we want
class QueueNode {
    constructor(name){
        this.name = name;
        this.next = null;
    }
}

// Defining the class QueueList with methods
class QueueList{

    // Creaing an object whit the propertie head = null
    constructor(){
        this.head = null;
        this.tail = null;
    }

    // This method create a new Queue and add it at the end of the Queue
    enqueue(name){
        // A new instance
        let newQueueNode = new QueueNode(name);

        // If there aren't any Queue, this one is the head
        if (this.head === null) {
            this.head = newQueueNode;
            this.tail = newQueueNode;
        }
        // If there are at least a Queue:
        else {
            // Adding the new node at the end of the queue (after the last current QueueNode)
            this.tail.next = newQueueNode;
            // Updating the last Node, as the new one that we have just created
            this.tail = newQueueNode;
        }
    }
    dequeue(){
        // We must verify if there is at least one Node
        if (this.head === null) {
            console.log("There are not Nodes");
        }
        // If there is at least one Node
        else{
            // Saving the dequeued Node
            let dequeueNode = this.head;
        
            // Replacing the head for the second element
            
            this.head = this.head.next;

            // If there were not a Node in the second position, the tail mus be null as well
            if (this.head === null) {
                this.tail = null;
                console.log(`The queue is now empty`);
            }
            else{
            console.log(`The new head is: ${this.head.name}, and the dequeueded Node is: ${dequeueNode.name}`);
        }
        }
    }

    dequeuePos(position){
        // Checking if at least there's  Node
        if (!this.head) {
            console.log("The Queue is empty");
            return;
        }   
        
        // If the position is the head
            if (position === 1) {
            // Saving the head for future requests
            let dequeueNode = this.head;
            // The second Node is now the first Node
            this.head = this.head.next;

            if (!this.head) {
                this.tail = null;
            }
            console.log(`The position: ${position} - ${dequeuedNode.name} has been deleted`);
            return;
        }
        
        // If the "position" is different to 1:
        let current = this.head;
        // Looping from 1 to position-1
        for(let i = 0; i < position - 1 && current.next != null ; i++){
            // We are in the Node before the position the user wants to delete (if exists)
            current = current.next;
        }          
     
        // If the position is out of bounderies
        if (current.next == null) {
            console.log(`The position: ${position} is out of boundaries`);
            return;
        }
        let dequeuedNode = current.next;
        current.next = current.next.next;


        if (current.next === null) {
            this.tail = current;
        }
    
        console.log(`The position: ${position} - ${dequeuedNode.name} has been deleted`);
    }

    
    
    showQueue(){
        let current = this.head;
        let index = 1;
        console.log("Quueu List:");

        // While there is minimun one Node
        if (current !== null) {
            while (current !== null) {
                // The content of the object/Node is shown in the console
                console.log(`Queue ${index}: ${current.name}`);
                // If there are not other Nodes, current == null, so the loop is gonna finish
                current = current.next;
                index++;
            }
        }

        else{
            console.log("There aren't Queues");
        }
       
    }


    
}

const prompt = require("prompt-sync")({ sigint: true });
function callMenuQueue(queueList) {
    let option;
    do {
        // showing in console options
        console.log("\nManager of queu:");
        console.log("1 - Show queu.");
        console.log("2 - Add  costumer queu.");
        console.log("3 - Delete queu.");
        console.log("4 - Exit.");
        console.log("5 - Delete position");

        // The function prompt shows a message and waits for a response which is saved originally as a string that is coverted in an int of base 10, because the response
        option = parseInt(prompt("Choose an option: "), 10);
    } 
    // while the response of the user is into the allowed parameters
    while (option < 1 || option > 5);
    switch (option) {
        case 1:
            // This case just show the list of Nodes if they exists
            queueList.showQueue();
            break;

        // The remainig cases must use another functions to received more arguments
        case 2:
            addElementQueue(queueList);
            break;
        case 3:
            removeElementQueue(queueList);
            break;
        case 4:
            console.log("Exiting...");
            return;
        case 5:
            deletePosition(queueList);
            break;  

        }
   
    // After executing every case, the method is called again
    callMenuQueue(queueList);
}


function addElementQueue(queueList){
    const name = prompt("Type the Queue you want to add: ");
    queueList.enqueue(name)
}

function removeElementQueue(queueList) {
    queueList.dequeue();
}

function deletePosition(queueList) {
    position = parseInt(prompt("Choose an position: "), 10);
    queueList.dequeuePos(position);
}

const queueList = new QueueList();
callMenuQueue(queueList);