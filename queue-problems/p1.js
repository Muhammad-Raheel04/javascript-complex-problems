// implement a queue using arrays
const MAX = 2;
const queue = [];

function enqueue(item) {
    if (queue.length >= MAX) {
        console.log(`Queue overflow`);
        return;
    }
    queue.push(item);
    console.log(`${item} inserted into the queue`)
}

function dequeue() {
    const item = queue.shift();
    console.log(`${item} dequeued`)
}

function traverseQueue() {
    if (queue.length === 0) {
        console.log("Queue is empty");
        return;
    }
    for (const item of queue) {
        console.log(item);
    }
}

enqueue(1);
enqueue(2);
enqueue(3);
traverseQueue();
dequeue();
enqueue(4);
traverseQueue();