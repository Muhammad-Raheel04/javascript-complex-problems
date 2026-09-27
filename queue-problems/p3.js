// implement dequeue without using shift method

const MAX = 100;
let queue = [];


function enqueue(item) {
    if (queue.length >= MAX) {
        console.log(`Queue overflow`);
        return;
    }
    queue.push(item);
    console.log(`${item} inserted into the queue`)
}


// using rest operators
// function dequeue() {
//     if (queue.length === 0) {
//         console.log(`Queue underflow`);
//         return;
//     }
//     const [item, ...remainingItems] = queue;
//     queue = remainingItems;
//     return item;
// }

function dequeue() {
    if (queue.length === 0) {
        console.log(`Queue underflow`);
        return;
    }
    const item = queue[0];
    queue = queue.slice(1);
    return item;
}

function traverse() {
    console.log(queue);
}
enqueue(1);
enqueue(2);
enqueue(3);

console.log("queue before dequeue");
traverse();

console.log(dequeue());

console.log("queue after dequeue");
traverse();