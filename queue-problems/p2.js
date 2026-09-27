// implement a queue using classes
const MAX = 100;

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        if (this.items.length >= MAX) {
            console.log("queue overflowed");
            return;
        }

        this.items.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue empty");
            return;
        }
    }

    traverse() {
        console.log(this.items);
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Queue empty");
            return;
        }
        console.log(this.items[0]);
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.traverse();
queue.enqueue(2);
queue.traverse();

queue.peek();

console.log(queue.isEmpty());