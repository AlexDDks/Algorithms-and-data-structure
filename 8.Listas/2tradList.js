
// This is the class for all the Nodes, with its respective constructor, the constructor creates an object when we instances the class with "new"
class ListNode {
    constructor(product, account) {
        this.product = product;
        this.account = account;
        this.next = null;
    }
}

// This class has all the body of the logic
class ShoppingList {

    // This is the constructor of the head or first element
    constructor() {
        this.head = null;
    }

    // This method initialize a new Node and add it to the end
    append(product, account) {

        // A new istance of the class (a new Node)
        let newArticle = new ListNode(product, account);

        // If the propertie head of ShoppingList is empty, this Node is gonna be, but if it's not...
        if (this.head === null) {
            this.head = newArticle;
        }
        // ...but if it's not...
        else {
            
            // The variable current saves the first Node
            let current = this.head;
            // while the head and the following Nodes has in the next propertie another Node, the loop is gonna be running
            while (current.next !== null) {
                current = current.next;
            }

            // When next propertie doesn't exist, we are in the last Node, so we can add in its propertie next, the new Node jus created
            current.next = newArticle;
        }
    }


    // This method position a new Node in a position provided by the user
    insertAtPosition(product, account, position) {

        // Here we are creating a new Node
        let newArticle = new ListNode(product, account);

        // If the user has declared the position as 1, the Node that is the head is passed as the value of the propertie of the new Node. So the original head moved one position after the new one.
        if (position === 1) {
            newArticle.next = this.head;
            // The original head is replaced by the new Node
            this.head = newArticle;
        }
        // If the position provided by the user is not one, we enter into a loop
        else {
            // We save the head into a variable that is gonna be used to start the loop
            let current = this.head;

            // Starting in one, up to position-1 because we want to position ourselves in the inmediatly previous position of the provided by the user, as long as the position be valid (not longer that it is)  If the position provided is 2, for example, the loop doesn't run, but the variable current has been already declared before as the head.
            for (let i = 1; i < position - 1 && current !== null; i++) {
                // From current to the inmediatly previous Node of the position provided by the user, the loop is turn on
                current = current.next;
            }

            // We need to repeat this validations because if we do not enter to the loop because of "current !== null", this is gonna be the next line, we need to get out of the code
            if (current !== null) {

                // For example if position is 2, current = head, so its next Node is assigned to the next of the new Node (after the new Node)
                newArticle.next = current.next;
                // The current Node replaces the original Node in next by the new One.
                current.next = newArticle;
            }
            // We enter to the else just if current !== null
            else {
                console.log("Position out of bounds");
            }
        }
    }

    // This method delete a Node in a position provided by the user
    removeAtPosition(position) {

        // If any Node has been created, so the propertie head of the Node must be empty
        if (this.head === null) {
            console.log("List is empty");
            return;
        }

        // If the position provided by the user is the first one, the Node Next of this one is the new Head
        if (position === 1) {
            this.head = this.head.next;
        }
        // If position is not onemptied, there will be a loop from current = head to the inmediatly previous position of the Node that the user wants to delete
        else {
            // From head...
            let current = this.head;
            // ...To the Node inmediatly previous one but the position must be into the limits
            for (let i = 1; i < position - 1 && current !== null; i++) {
                // We save the Node previous of the Node in the position to delete in this variable
                current = current.next;
            }

            // if the position is valid and the last element previous of the position has another Node inmediatly before, because the user could say the position 10, and its gonna be valid for the loop, but maybe there is not 11 (which must be in the next of the node number 10) 
            if (current !== null && current.next !== null) {
                
                // current.next save the Node that we want to delete, so it is substituted for the Node un the position after the one that the user wants to delete, this is not optimized (still not) for the las Node
                current.next = current.next.next;
            } else {
                console.log("Position out of bounds");
            }
        }
    }

    // This method shows all the nodes
    showList() {
        let current = this.head;
        let index = 1;
        console.log("Shopping List:");

        // While there is minimun one Node
        while (current !== null) {
            // The content of the object/Node is shown in the console
            console.log(`Article ${index}: ${current.product} x${current.account}`);
            // If there are not other Nodes, current == null, so the loop is gonna finish
            current = current.next;
            index++;
        }
    }
}

// Importing the module PromptSync. sigint: true is a configuration for the module, which allows to listen signals of the user such as ctrl + c to finish the process
const prompt = require("prompt-sync")({ sigint: true });

// This function receives the variable shoppingList which already has all its properties, values and methods
function callMenuList(shoppingList) {
    let option;
    do {
        // showing in console options
        console.log("\nManager of Shopping List:");
        console.log("1 - Show shopping list.");
        console.log("2 - Add article.");
        console.log("3 - Remove article.");
        console.log("4 - Create default shopping list.");
        console.log("5 - Exit.");
        // The function prompt shows a message and waits for a response which is saved originally as a string that is coverted in an int of base 10, because the response
        option = parseInt(prompt("Choose an option: "), 10);
    } 
    // while the response of the user is into the allowed parameters
    while (option < 1 || option > 5);
    switch (option) {
        case 1:
            // This case just show the list of Nodes if they exists
            shoppingList.showList();
            break;

        // The remainig cases must use another functions to received more arguments
        case 2:
            addElementList(shoppingList);
            break;
        case 3:
            removeElementList(shoppingList);
            break;
        case 4:
            createList(shoppingList);
            break;
        case 5:
            console.log("Exiting...");
            return;
    }
    // After executing every case, the method is called again
    callMenuList(shoppingList);
}

// If the user wants to add a Node in a particular position, the information is received and shared as arguments in one method of the class
function addElementList(shoppingList) {
    const product = prompt("Type the product you want to buy: ");
    const account = parseInt(prompt("Type the account: "), 10);
    const position = parseInt(prompt("Type the position of the new product: "), 10);
    shoppingList.insertAtPosition(product, account, position);
}

// If the user wants to remove a Node, the information is received and shared as argument in one method of the class
function removeElementList(shoppingList) {
    shoppingList.showList();
    const position = parseInt(prompt("Type the number of the article you want to remove: "), 10);
    shoppingList.removeAtPosition(position);
}

// If the user wants to add a Node previowsly defined (such as default), at the last position. The information is received and shared as arguments in one method of the class
function createList(shoppingList) {
    shoppingList.append("gel", 2);
    shoppingList.append("orange", 20);
    shoppingList.append("chocolate", 50);
    console.log("Default articles added to shopping list.");
}

// Crear una instancia de la lista de compras y mostrar el menú
const shoppingList = new ShoppingList();
callMenuList(shoppingList);
