class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack underflow");
            return;
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        if (this.items.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}

const stack = new Stack();
stack.push(1);
console.log(stack.peek());
