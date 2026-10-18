// return the first character that doesn't repeat
const str = "aabbcdde";
const MAX = 100;
const queue = [];
const map = new Map();

function enqueue(item) {
    if (queue.length >= MAX) {
        console.log(`Queue overflow`);
        return;
    }
    queue.push(item);
}

function dequeue() {
    if (queue.length === 0) {
        console.log("Queue underflow");
        return;
    }
    const item = queue.shift();
    return item;
}

function peek() {
    return queue[0];
}

for (const s of str) {
    map.set(s, (map.get(s) || 0) + 1);

    enqueue(s);

    while (queue.length > 0 && map.get(peek()) > 1) {
        dequeue();
    }
}

console.log("Non-repeated character", peek())