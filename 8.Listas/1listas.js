// // Defining a class called Node, which must contain just one constructor. This is executed automatically when a new instance of the class is created
// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// // Defining a class called LinkedList
// class LinkedList{

//     // This constructor stablish the head of the list, that is executed when a new instance of the object is created. Doesn't receive any parameter
//     constructor(){
//         this.head = null;
//     }

//     // append is a method of the lists, that inserts a Node at the final of the list
//     append(value){

//         // Creating a new instance of Node
//         let newNode = new Node(value);

//         // If there are not other Nodes, this one will be the head
//         if (this.head == null) {
//             this.head = newNode;
//         }

//         // If there are other Nodes, the variable current is equal to the Node at the head
//         else{
//             let current = this.head;

//             // As every Node has its propertie "next", if the actual Node of the loop has a value in next; i.e. "next!=null", the last Node is assigned to current. So current NOW IS TE SECOND NODE, an so on until there is a Node with "next == null"
//             while (current.next != null) {
//                 current = current.next;
//             }
//             //Out of the loop we assign as value Next to the last Node, the new Node just created
//             current.next = newNode;
//         }
//     }

//     print(){
//         let current = this.head;
//         while (current != null) {
//             console.log(current.value);
//             current = current.next
            
//         }
//     }
// }

// let lista = new LinkedList(); //A new instance of LinkedList is created, but it's an object with just a {this.head = null;} append(value) {// código del método append} print() {// código del método print}

// // Cuando creas una instancia de una clase, esa instancia hereda todos los métodos definidos en la clase.
// lista.append(10); // La lista ahora tiene un nodo con valor 10
// lista.append(20); // Agrega un segundo nodo con valor 20
// lista.append(30); // Agrega un tercer nodo con valor 30
// lista.print();    // Debería imprimir 10, 20, 30


// // -------------------------------

// Creating the class TaskNode, which stablish the content of each instance
class TaskNode {
    constructor(name, isCompleted = false){
        this.name = name;
        this.isCompleted = isCompleted;
        this.next = null;
    }
}

// Creating TaskList, which execute a constructor and has 3 methods
class TaskList{
    constructor(){
        this.head = null;
    }
    // append receive an atributte and make an instance of the Node
    append(name){
        let newTask = new TaskNode(name);

        // Stabishing the head of the Nodes
        if (this.head == null) {
            this.head = newTask;
        }
        // If there is already a head we go to this point
        else{
            // Going through all the Nodes while there is Nodes
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            // We are in the last Node, and stablish the new Instance recently created as a the last Node
            current.next = newTask
        }
    }

    // This method receives the name of the task
    completeTask(name){

        let current = this.head;

        // While there is a head (we're starting from the first to the last Node)
        while (current != null) {

            // if the argument given to this method == to the name of the name in the Nodes, the task is completed
            if (current.name == name) {
                current.isCompleted = true;
                // if the task is completed we get out of this method
                return 
            }
            // if the current name doesn't match with the argument, we are still looping in all Nodes
            // Now, the current = to the next Node, we are touring in all Nodes
            current = current.next;
        }

        // If thera is not matching:
        console.log(`Tarea ${name} no encontrada.`);
    }

    printTask(){

        let current = this.head;
        // We are starting from the first element to the last one
        while (current != null) {

            // Logging if the element is completed, we enter in a ternarium if. Tours in all Nodes and just log the values of its properties. If isCompleted = true : Completada, if false: No completada
            console.log(`${current.name} - ${current.isCompleted ? 'Completada' : 'No completada'}`);
            current = current.next;
        }
    }
}

let listaTareas = new TaskList();

listaTareas.append("Comprar leche")
listaTareas.append("Comprar leche2")

listaTareas.completeTask("Comprar leche");
listaTareas.printTask();