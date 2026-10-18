// delete a key in the linkedlist

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
                return true;
            }
            current = current.next;
        }
        return false;
    }

    delete(value) {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            if (current.next.value === value) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }

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
console.log(list.search(0));
list.delete(40);
list.print();