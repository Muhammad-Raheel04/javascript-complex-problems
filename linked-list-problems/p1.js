// search for a value in the linkedlist

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
    }

    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
    }

    search(value) {
        let current = this.head;

        while (current !== null) {
            if (current.value == value) {
                console.log("Value found");
                return;
            }
            current = current.next;
        }
        console.log("Value not found");
    }

    print() {
        let current = this.head;

        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const list = new LinkedList();

list.append(20);
list.append(30);
list.prepend(10);
list.search(0);
list.print();